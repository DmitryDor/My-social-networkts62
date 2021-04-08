import React, {ChangeEvent, KeyboardEvent} from 'react';
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import {PostType} from "../../../redux/store";
import {Field, InjectedFormProps} from "redux-form";
import {reduxForm} from "redux-form";
import {maxLengthCreater} from "../../../utils(validator)/validators";
import {required} from '../../../utils(validator)/validators'
import {Textarea} from "../../../assets/formsControls/FormsControls";

type PropsType = {
    postData: Array<PostType>
    // newPostText: string
    addPost: (post: string) => void
    // updateNewPostText: (newText: string) => void
}
type FormDataType = {
    post: string
}


const MyPosts = React.memo((props: PropsType) => {


    let postElements = props.postData.map(post => <Post message={post.message} likesCount={post.likesCount}
                                                        id={post.id} key={post.id}/>);


    const onSubmit =   (value: FormDataType) => {
        props.addPost(value.post)
    }


    return (
        <div className={styles.postsBlock}>
            <h3>My posts</h3>
            <div>

                <TextAreaFormRedux onSubmit={onSubmit}/>

            </div>
            <div className={styles.posts}>
                {postElements}
            </div>
        </div>
    );
})
const maxLength10 = maxLengthCreater(10)

const TextAreaForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    console.log('Rendering')
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field  placeholder='Enter your post' component={Textarea} name={'post'}
                    validate={[required, maxLength10]}/>
        </div>
        <div>
            <button>Add post</button>
        </div>
    </form>
}

const TextAreaFormRedux = reduxForm<FormDataType>({form: 'MyPosts'})(TextAreaForm)

export default MyPosts;

//до 76 урока
/*
import React, {ChangeEvent, KeyboardEvent} from 'react';
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import {PostType} from "../../../redux/store";


type PropsType = {
    postData: Array<PostType>
    newPostText: string
    addPost: () => void
    updateNewPostText: (newText: string) => void
}


const MyPosts = (props: PropsType) => {


    let postElements = props.postData.map(post => <Post message={post.message} likesCount={post.likesCount}
                                                        id={post.id} key={post.id}/>);


    const addPost = () => {
        props.addPost()
        // props.dispatch({type: "ADD-POST"})
        // props.dispatch(AddPostAC())
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const newText = e.currentTarget.value
        props.updateNewPostText(newText)
        // props.dispatch(UpdateNewPostTextAC(newText))
    }


    const onKeyPressHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter') {
            addPost()
        }
    }

    return (
        <div className={styles.postsBlock}>
            <h3>My posts</h3>
            <div>

                <div>
                    <textarea value={props.newPostText} onChange={onPostChange}
                              placeholder={'Enter your post'} onKeyPress={onKeyPressHandler}/>
                </div>

                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={styles.posts}>
                {postElements}
            </div>
        </div>
    );
}
export default MyPosts;*/
