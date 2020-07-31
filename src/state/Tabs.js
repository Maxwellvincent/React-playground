import React from 'react';

export class Tabs extends React.Component {
    static defaultProps = {
        tabs: []
    };

    state = {
        currentTab: 0
    };

    handleClick(index){
        this.setState({
            currentTab: index
        })
    }

    renderButtons() {
        return this.props.tabs.map((tab,index) => (<button key={index} onClick={() => this.handleClick(index)}>{tab.name}</button>));
    }

    renderContent() {
        const currentTab = this.props.tabs[this.state.currentTab];
        return (
            <div className='content'>
                {currentTab.content}
            </div>
        )
    }

    render(){
        
        return (
            <div>
                {this.renderButtons()}
                {!!this.props.tabs.length && this.renderContent()}
            </div>)
    }
}