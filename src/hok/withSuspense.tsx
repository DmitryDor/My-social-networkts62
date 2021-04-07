import React, {Suspense} from "react";

type Props1Type = {

}


export const WithSuspense = (Component: React.ComponentClass | React.FC) => {

    return (props: Props1Type) => {
        return (
            <Suspense fallback={<div>Loading...</div>}>
                <Component {...props}/>
            </Suspense>
        )
    }
}
