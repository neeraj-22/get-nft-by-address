import React, { Fragment } from 'react'
// import NFTCard from "./NFTCard.js"
import "./NFTContainer.css"

// import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

const NFTContainer = ({ nfts }) => {

    return (
        <Fragment>
            {/* {
                nfts.map((nft, index) => {
                    return <NFTCard nft={nft} key={index}/>
                })
            } */}
            <div className='gallery'>
                {nfts.map((nft, index) => {
                    return (
                        nft.meta.content[0].mimeType === "video/mp4" 
                        ? 
                        <div className='pics' key={index}>
                            <video style={{ width : "100%"}} autoPlay loop>
                                <source src={nft.meta.content[0].url} type="video/mp4"/>
                            </video>
                        </div>
                        :
                        <div className='pics' key={index}>
                            <img src={nft.meta.content[0].url} alt={nft.meta.name} style={{ width: "100%" }} />
                        </div>
                    )
                })}
            </div>

        </Fragment>
    )
}

export default NFTContainer