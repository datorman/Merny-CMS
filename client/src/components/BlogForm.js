import React from 'react';


export default class BlogForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: props.title ? props.blog.title : '',
            body: props.body ? props.blog.body:''
        }
    }
    onTitleChange = (e) => {
        const title = e.target.value;
        this.setState(() => ({title}));
    };
    onBodyChange = (e) => {
        const body = e.target.value;
        this.setState(() => {{body}});
    };
    onSubmit = (e) =>{
        e.preventDefault();
        if(!this.state.title){
            this.setState(() => ({error: 'Please provide a title.'}));
        }
        else{
            this.setState(()=>({error: ''}));
            this.props.onSubmit({
                title: this.state.title,
                body: this.state.body
            })
        }
    };
    render() {
        return(    
            <form className = "form" onSubmit = {this.onSubmit}>
                {this.state.error && <div className="form__error">{this.state.error}</div>}
                <input 
                    className="text-input"
                    type="text"
                    placeholder="Title"
                    autoFocus    
                    value = {this.state.title}
                    onChange = {this.onTitleChange}
                />
                <textarea
                    className="textarea"
                    placeholder="Enter Post Contents here."
                    value = {this.state.body}
                    onChange = {this.onBodyChange}
                ></textarea>
                <div>
                    <button className="button">Save Expense</button>
                </div>
            </form>
        )
    }
};