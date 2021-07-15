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


class portfolio extends React.Component{ 
      state={all:true,
             web:true,
             mobile:true
      }
      displayAll=()=>{
            this.setState((state,props)=>{
                  return {...state, all:true} });
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
            <div className="portfolio__grid">
                  <div className="portfolio__selectionButton margin-bottom-small">
                        <SelectionButton click={this.displayAll}>All</SelectionButton>
                        <SelectionButton click={this.displayMobile}>Mobile</SelectionButton>
                        <SelectionButton click={this.displayWeb}>web</SelectionButton>
                  </div>
      
                  <PortfolioContainer display={this.state} src={nexter} alt="nexter project" className="portfolio__web"></PortfolioContainer>
                  <PortfolioContainer display={this.state} src={calender} alt="calender project" className="portfolio__mobile"></PortfolioContainer>
                  <PortfolioContainer display={this.state} src={ecommerce} alt="ecommerce project" className="portfolio__mobile"></PortfolioContainer>
                  <PortfolioContainer display={this.state} src={outdoor} alt="outdoor project" className="portfolio__web"></PortfolioContainer>
                  <PortfolioContainer display={this.state} src={food} alt="food project" className="portfolio__mobile"></PortfolioContainer>
                  <PortfolioContainer display={this.state} src={trillo} alt="trillo project" className="portfolio__web"></PortfolioContainer>
                  <PortfolioContainer display={this.state} src={chatApp} alt="chatApp project" className="portfolio__mobile"></PortfolioContainer>
                  <PortfolioContainer display={this.state} src={locator} alt="locator project" className="portfolio__mobile"></PortfolioContainer>
                  <PortfolioContainer display={this.state} src={tracker} alt="tracker project" className="portfolio__mobile"></PortfolioContainer>
                  
            </div>
        </section>);

        return port;
} 
}
export default portfolio;