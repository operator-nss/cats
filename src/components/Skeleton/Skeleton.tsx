import React from "react"
import ContentLoader from "react-content-loader"

type SkeletonProps = {
    imageLoaded:boolean
}

    const Skeleton:React.FC<SkeletonProps> = ({imageLoaded}) => (
        <ContentLoader
            speed={2}
            width={225}
            height={225}
            viewBox="0 0 225 225"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
            display={imageLoaded ? 'none' : 'block'}
        >
            <rect x="0" y="297" rx="10" ry="10" width="280" height="33" />
            <rect x="3" y="362" rx="10" ry="10" width="280" height="88" />
            <rect x="5" y="468" rx="10" ry="10" width="95" height="30" />
            <rect x="127" y="461" rx="25" ry="25" width="152" height="45" />
            <rect x="16" y="0" rx="0" ry="0" width="225" height="225" />
        </ContentLoader>


    )

export default Skeleton;