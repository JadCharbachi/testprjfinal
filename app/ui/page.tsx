import { Suspense } from "react";
import CardSkeleton, { TitleSkeleton } from "./skeleton";
import Component from "./component";

export default function Page() {
    return (
        <div>
            <Suspense fallback={<><TitleSkeleton /><CardSkeleton /></>}>
                <Component />
            </Suspense>
        </div>
    );
}