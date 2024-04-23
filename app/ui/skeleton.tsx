const shimmer =
    'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

export default function CardSkeleton() {
    return (
        <div>
            <div
                className={`${shimmer} relative overflow-hidden rounded-xl bg-gray-100 p-2 shadow-sm`}
            >
                <div className="flex items-center justify-center truncate rounded-xl bg-white px-4 py-8">
                    {/*<div className="h-7 w-20 rounded-md bg-gray-200" />*/}
                </div>
            </div>
        </div >
    );
}

export function TitleSkeleton() {
    return (
        <div
            className={`${shimmer} relative overflow-hidden rounded-xl bg-gray-100 p-2 shadow-sm`}
        >
            <div className="flex p-4">
                {/*<div className="h-5 w-5 rounded-md bg-gray-200" />*/}
                <div className="ml-2 h-6 w-16 rounded-md bg-gray-200 text-sm font-medium" />
            </div>
        </div>
    );
}

export function GraphSkeleton() {
    return (
        <div
            className={`${shimmer} relative overflow-hidden rounded-xl bg-gray-100 p-2 shadow-sm`}
        >
            <div>

            </div>
        </div>
    );
}

export function APIcardSkeleton() {
    return (
        <div>
            <div
                className={`${shimmer} relative overflow-hidden rounded-xl bg-gray-100 p-2 shadow-sm`}
            >
                <div className="ml-0 mr-auto w-30 justify-left truncate rounded-xl bg-white px-4 py-4 grid-rows-4">
                    <div className="h-6 w-20 rounded-md bg-gray-200 mb-1" />
                    <div className="h-4 w-10 rounded-md bg-gray-200 mb-1" />
                    <div className="h-8 w-20 items-center rounded-md bg-gray-200">
                        <p className="text-tremor-metric font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong"
                        >
                            USD
                        </p>
                    </div>
                </div>
            </div>
        </div >
    );
}
