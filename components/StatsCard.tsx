import { calculateLegendShapes } from "@syncfusion/ej2-react-charts"
import { calculateTrendPercentage } from "~/lib/utils"
import { cn } from "~/lib/utils";

const StatsCard = ({
  headerTitle,
  total,
  lastMonthCount,
  currentMonthCount
}: StatsCard) => {
  const{trend, percentage}= calculateTrendPercentage(currentMonthCount,lastMonthCount);
  const isDecrement= trend=='decrement'
  return (
    <div>
      <article className="stats-card">
        <h3 className="text-base font-mediun">
          {headerTitle}
        </h3>
        <div className="content">
          <div className="flex flex-col gap-">
            <h2 className="text-4xl font-semibold">
            {total}</h2>
           <div className="flex items-center gap-2">
            <figure className="flex items-center gap-1">
              <img src={`/assets/icons/${isDecrement? 'arrow-down-red.svg':'arrow-up-green.svg' }`} alt="arrow" className="size-5" />
              <figcaption className={cn('text-sm font-medium', isDecrement? 'text-red-500':
                'text-success-700'
              )}>
                {Math.round(percentage)}%
              </figcaption>
            </figure>
            <p className="text-sm font-medium text-gray-100 truncate">vs last month</p>
           </div>
          </div>
          <img src={`../public/assets/icons/${isDecrement? 'decrement.svg':'increment.svg'}`} alt="trend graph" className="xl:w-32 w-full h-full md:h-32 xl:h-full "/>
        </div>
      </article>
    </div>
  )
}

export default StatsCard
