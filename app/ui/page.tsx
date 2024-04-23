import { Suspense } from "react";
import CardSkeleton, { APIcardSkeleton, TitleSkeleton } from "./skeleton";
import Component from "./component";

export default function Page() {
    return (
        <div>
            <Suspense fallback={<>
                <TitleSkeleton />
                <CardSkeleton />
                <APIcardSkeleton />
            </>}>
                <Component />
            </Suspense>
        </div>
    );
}