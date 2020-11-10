import React from 'react'
import Skeleton from '@material-ui/lab/Skeleton';

export const SkeletonTable = React.memo(() => {
    return (
        <>
            <Skeleton animation="wave" height={30} />
            <Skeleton animation="wave" width={'100%'} height={100} />
        </>
    )
})


