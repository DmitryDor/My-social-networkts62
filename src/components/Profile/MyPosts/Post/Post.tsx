import React from 'react';
import styles from "./Post.module.css";

const Post = () => {
    return (
        <div className={styles.item}>
            <img
                src={"https://avatars.mds.yandex.net/get-zen_doc/192582/pub_5c456a357211c900ae966091_5c456bc8d4fdd900b0ce9220/scale_1200"}/>
            post 1
            <div>
                <span>like</span>
            </div>
        </div>
    );
}

export default Post;