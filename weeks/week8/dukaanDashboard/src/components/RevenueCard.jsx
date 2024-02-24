export const RevenueCard = ({title, orderCount , amount}) => {
    return (
    <div className="bg-white rounded shadow-md p-4 m-4">
        <div>
            <p className=" text-gray-500 text-sm">{title}</p>
            
        </div>
        <div className="flex justify-between">
            <div className="font-semibold text-2xl">
                &#8377;{amount}
            </div>
            {
                orderCount ? <div>{orderCount} orders {">"}</div> : null
            }
        </div>
    </div>
    
    )
}