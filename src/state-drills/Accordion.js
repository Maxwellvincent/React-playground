import React from 'react';

export class Accordion extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: this.props.sections[0].title,
            content: this.props.sections[0].content
        }
    }

    static defaultProps = [
        {tile: "header",
        content: "This is default"}
    ]
        

    handleClick= (index, section) => {
        this.setState({
            title: section.title,
            content: section.content
        })
    }

    render(){
        let {sections} = this.props;
        
        // console.log(sections[0].title)
        const listItem = sections.map((section,index) => <li key={index}><button onClick={() => this.handleClick(index, section)}>{section.title}</button></li>)
        return (<ul>
            {listItem}
            <p>{this.state.content}</p>
        </ul>)
    }
}