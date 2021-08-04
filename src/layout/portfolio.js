import React from "react";
import SelectionButton from "../component/selectButton"
import PortfolioContainer from "../component/portfolioContainer";
//images
import nexter from "../img/portfolio/nexter.png";
import outdoor from "../img/portfolio/outdoor1.png";
import trillo from "../img/portfolio/trillo.png";
import calender from "../img/portfolio/calender1.jpg";
import ecommerce from "../img/portfolio/ecommerce1.png";
import food from "../img/portfolio/food1.png";
import locator from "../img/portfolio/locator1.png";
import tracker from "../img/portfolio/tracker1.jpg";
import chatApp from "../img/portfolio/chatApp1.png";

//portfolio-details images
//calender
import calender2 from "../img/portfolio/calender2.jpg";
import calender3 from "../img/portfolio/calender3.jpg";
import calender4 from "../img/portfolio/calender4.jpg";
import calender5 from "../img/portfolio/calender5.jpg";

//e-commerce
import ecommerce1 from "../img/portfolio/ecommerce.png";
import ecommerce3 from "../img/portfolio/ecommerce3.png";
import ecommerce4 from "../img/portfolio/ecommerce4.png";

//food
import food2 from "../img/portfolio/food2.png";
import food3 from "../img/portfolio/food3.png";
import food4 from "../img/portfolio/food4.png";

//outdoor
import outdoor2 from "../img/portfolio/outdoor2.png";
import outdoor3 from "../img/portfolio/outdoor3.png";

//tracker
import tracker2 from "../img/portfolio/tracker2.jpg";
import tracker3 from "../img/portfolio/tracker3.jpg";

class portfolio extends React.Component{ 
      state={all:true,
             web:false,
             mobile:false
      }
      displayAll=()=>{
            this.setState((state,props)=>{
                  return {web:false,mobile:false,all:true} });
      }
      displayWeb=()=>{
            this.setState((state,props)=>{return {web:true,mobile:false,all:false} });
      }
      displayMobile=()=>{
            this.setState((state,props)=>{return {web:false,mobile:true,all:false} });
      }
   render() {
    let port=this.props.background?(
        <section className="portfolio portfolio--background"></section>):
        (<section id="portfolio" className="portfolio">
            <h2 className="heading__2 section__heading margin-bottom-medium">portfolio</h2>
            <div data-aos={"fade-left"} className="portfolio__grid">
                  <div className="portfolio__selectionButton margin-bottom-small">
                        <SelectionButton active={this.state.all} click={this.displayAll}>All</SelectionButton>
                        <SelectionButton active={this.state.mobile} click={this.displayMobile}>Mobile</SelectionButton>
                        <SelectionButton active={this.state.web} click={this.displayWeb}>web</SelectionButton>
                  </div>
      
                  <PortfolioContainer writeUp={{heading:"nexter", writeUp:"pet project for real estate designed by jonas implemented by myself using grid layout ",link:"https://triggac4.github.io/nexter/"}} display={this.state} src={nexter} alt="nexter project" className="portfolio__web" imageUrl={[nexter]}></PortfolioContainer>
                  <PortfolioContainer writeUp={{heading:"calender",writeUp: "Its backend was built with SQL and CRUD operations are performed locally meaning no internet required."+
                  "It color codes each schedule making it easier to easily spot the schedule you are looking for"}} 
                  display={this.state} src={calender} alt="calender project" className="portfolio__mobile" imageUrl={[calender,calender2,calender3,calender4,calender5]}></PortfolioContainer>
                  <PortfolioContainer writeUp={{heading:"e-commerce",writeUp:"A new E-commerce I’m designing for a client where she specifies what kind of product she intends to add and selects the picture to be displayed for the customers to see It uses a firebase backend and the PayStack API for in app payments which needs to be done to purchase a product"}} display={this.state} src={ecommerce} alt="ecommerce project" className="portfolio__mobile" imageUrl={[ecommerce,ecommerce1,ecommerce3,ecommerce4]}> </PortfolioContainer>
                  <PortfolioContainer writeUp={{heading:"outdoor",writeUp:"another pet web project designed by jonas which i implemented this time using floats ",link:"https://triggac4.github.io/first-front-end-web/"}} display={this.state} src={outdoor} alt="outdoor project" className="portfolio__web" imageUrl={[outdoor,outdoor2,outdoor3]}></PortfolioContainer>
                  <PortfolioContainer writeUp={{heading:"food project", writeUp:"Food delicacy’s application This groups special meals and together and then shows what the amount of time needed to make each meal and steps taken to prepare each meal.. This also uses on device storage to keep data"}} display={this.state} src={food} alt="food project" className="portfolio__mobile" imageUrl={[food,food2,food3,food4]}></PortfolioContainer>
                  <PortfolioContainer writeUp={{heading:"trillo",writeUp:"this was designed by jonas and implemented by me using flex to layout the page ",link:"https://triggac4.github.io/trillo/"}} display={this.state} src={trillo} alt="trillo project" className="portfolio__web" imageUrl={[trillo]}></PortfolioContainer>
                  <PortfolioContainer writeUp={{heading:"chat app", writeUp:"Built with flutter with a firebase backend uses cloud database saves the users image in the firebase storage each message is arranged in json format"}}display={this.state} src={chatApp} alt="chatApp project" className="portfolio__mobile" imageUrl={[chatApp]}></PortfolioContainer>
                  <PortfolioContainer writeUP={{heading:"locator project",writeUp:"This uses some native functions it gets the location of the user and takes a picture or selects from the file manager it also uses SQLite as the on device storage medium so as to retain data during re-lunch"}} display={this.state} src={locator} alt="locator project" className="portfolio__mobile" imageUrl={[locator]}></PortfolioContainer>
                  <PortfolioContainer writeUp={{heading:"tracker" ,writeUp:"A simple tracking application that sends your GPS location to a server This users Firebase cloud database. Here the application sends data to the backend through web sockets meaning it sends to the server and almost immediately the location changes "}} display={this.state} src={tracker} alt="tracker project" className="portfolio__mobile" imageUrl={[tracker,tracker2,tracker3]}></PortfolioContainer>
                  
            </div>
        </section>);

        return port;
} 
}
export default portfolio;