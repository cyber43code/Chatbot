import React, { Component } from 'react';
import { Widget, addResponseMessage,renderCustomComponent } from 'react-chat-widget';
// import { Chat, HeroCard } from '@progress/kendo-react-conversational-ui';
// import * as AdaptiveCards from "adaptivecards";
import 'react-chat-widget/lib/styles.css';
 import './App.css'
import logo from './assets/bot.svg';
import Cards from './Card';

class App extends Component {
 

  componentDidMount(props) {
    addResponseMessage("Welcome To Waste separation Type:- Yellow Bins,Bio Waste,Blue Bins,Green Bins,Black Bins,Gray Bins,Brown Bins");
  }
 
  handleNewUserMessage = (newMessage,props) => {


   

    // console.log(`New message incoming! ${newMessage}`);
    // let adaptiveCard = new AdaptiveCards.AdaptiveCard();
    //  let attachment = newMessage.item;
    // let adaptiveCard = new AdaptiveCards.AdaptiveCard();
    // var n = newMessage.search('python developer');
  
    if( newMessage==='hi'){
      addResponseMessage('hi');
    }
    if( newMessage==='hello'){
      addResponseMessage('hello');
    }
    if( newMessage==='how are you'){
      addResponseMessage('fine, and you ?');
    }
    if( newMessage==='fine'){
      addResponseMessage('glad to here that!');
    }
    if( newMessage==='good'){
      addResponseMessage('its nice!');
    }
    if( newMessage==='thanks'){
      addResponseMessage('welcome,! type python devloper');
    }
    if( newMessage==='Gray Bins'){
      addResponseMessage(' residual waste or household waste and all other types of waste that cannot be recycled (for example, porcelain, hygiene articles, dirty packaging, damaged shoes or utensil, vacuum cleaner bags, diapers, cigarette butts, window glasses).');
    }
    if( newMessage==='Yellow Bins'){
      addResponseMessage('Light-weight packaging, i.e. all packaging which are not made of glass or paper (for example aluminum foil, plastic bags, tins, yoghurt cups, Tetra-packs in which juice and milk are sold, plastic bottles and coffee packs)Please note: Very old/stained paper, e.g. paper packages of groceries, ought to be put in the residual waste bin and Tetra-packs (in which juice and milk are sold) belong in the yellow sack or bin.');
    }
    if( newMessage==='Green Bins'){
      addResponseMessage(' Paper waste and cardboard (for example, paper bags, newspapers, catalogs, writing paper, cartons, cigarette packs');
    }
    if( newMessage==='Blue Bins'){
      addResponseMessage(' Paper waste and cardboard (for example, paper bags, newspapers, catalogs, writing paper, cartons, cigarette packs');
    }
    if( newMessage==='Black Bins'){
      addResponseMessage(' residual waste or household waste and all other types of waste that cannot be recycled (for example, porcelain, hygiene articles, dirty packaging, damaged shoes or utensil, vacuum cleaner bags, diapers, cigarette butts, window glasses).');
    }
    if( newMessage==='Brown Bins'){
      addResponseMessage(' compostable kitchen and garden waste (e.g. coffee and tea dregs, fruit and vegetables remains, eggshells, leaves).');
    }
    if( newMessage==='Bio Waste'){
      addResponseMessage(' compostable kitchen and garden waste (e.g. coffee and tea dregs, fruit and vegetables remains, eggshells, leaves).');
    }
    // if( newMessage==='Black Bins'){
    //   addResponseMessage(' residual waste or household waste and all other types of waste that cannot be recycled (for example, porcelain, hygiene articles, dirty packaging, damaged shoes or utensil, vacuum cleaner bags, diapers, cigarette butts, window glasses).');
    // }
   
    if (newMessage==='plastic'){
        // adaptiveCard.parse(attachment.content);
        // addResponseMessage("Here Are My best Suggestions For You");
        renderCustomComponent(Cards);                            // ) ;
      // "ok there are no results found now I'll inform you as soon as I found them."
    }
    
    
      

    
    
  }
 
  render() {
    return (
      <div className="App">
         <h1>Waste Management</h1>
         <h5>Chatbot</h5>
        <Widget
          
          handleNewUserMessage={this.handleNewUserMessage}
          profileAvatar={logo}
          title="Waste Management "
          subtitle="Willkommen bei Waste Management Bot"
        />
      </div>
    );
  } 
}
 
export default App;