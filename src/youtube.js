import React, { Component } from 'react';
//https://www.googleapis.com/youtube/v3/search?key=AIzaSyBHvJSOQCJWYGqmnEpMD_PhNKQ2wGCLv-E&channelId=UCpT9kL2Eba91BB9CK6wJ4Pg&part=snippet,id&order=date&maxResults=10
const API = 'AIzaSyBHvJSOQCJWYGqmnEpMD_PhNKQ2wGCLv-E';
const channelID = 'UCpT9kL2Eba91BB9CK6wJ4Pg';
const result = 10;

var finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${result}`;
class Youtube extends Component {
    constructor(props){
        super(props);

        this.state = {
            resultyt: []
        };
        this.clicked = this.clicked.bind(this);
    }
    clicked(){
        fetch(finalURL)
    .then((response) => response.json())
    .then((responseJson) => {
      const resultyt = responseJson.items.map(obj => "https://www.youtube.com/embed/"+obj.id.videoId);
      this.setState({resultyt});
      console.log(this.state.resultyt);

    })
    .catch((error) => {
      console.error(error);
    });
    }
    
    render() { 
        //console.log(finalURL);
        console.log(this.state.resultyt);
        return ( 
            <div>
                <button onClick={this.clicked}>Click here for Videos!!</button>
                {
                        this.state.resultyt.map((link, i) => {
                            console.log(link);
                            var frame = <div className="youtube"><iframe key={i} width="560" height="315" src={link} 
                            title="YouTube video player" frameBorder="0" ></iframe></div>
                            return frame;
                        })
                }
                
                 {this.frame}
                
            </div>
         );
    }
}
 
export default Youtube;