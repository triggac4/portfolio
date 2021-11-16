import {Component} from "react";
class PhotoGallery extends Component{
    
    componentDidMount(){
        this.setState({
            leftListPosition:this.props.imageUrl.length -1,
            rightListPosition:this.props.imageUrl.length>1? 1:0
        });
    }
    state={
        position:"middle",
        leftListPosition:0,
        middleListPosition:0,
        rightListPosition:0,
        transition: true
    };

    moveForward=()=>{
        const imageLength=this.props.imageUrl.length -1;
        this.setState({position:"right"});
        let reset=false;
        if(this.state.rightListPosition>=(imageLength)){
        reset=true;
        }
        
        setTimeout(()=>{
            this.setState((state,props)=>{
                return{
                    position:"middle",
                    leftListPosition:state.middleListPosition,
                    middleListPosition:state.rightListPosition,
                    rightListPosition:reset?0:state.rightListPosition+1,
                    middleMove:true,
                    transition:false
                }
            });
        },200);
        
        this.setState({transition:true});
           
    }
    moveBack=(position)=>{
        const imageLength=this.props.imageUrl.length -1; 
        this.setState({position:"left"});
        let reset=false;
        if(this.state.leftListPosition<=0){
            reset=true;
        }
        setTimeout(()=>{
            this.setState((state,props)=>{
                return{
                    position:"middle",
                    leftListPosition:reset?imageLength:state.leftListPosition-1,
                    middleListPosition:state.leftListPosition,
                    rightListPosition:reset?imageLength:state.middleListPosition,
                    transition:false
                }
            });
            },200);

            this.setState({transition:true});
        
    }
    render(){

        const imageUrl=this.props.imageUrl;
        let middleMove="";

        let moveRight="";
        let moveLeft="";
      
        
        if(this.state.position==="left"){
            moveRight="left-middle";
            middleMove="left-middle-middle";
        }
        if(this.state.position==="right"){
            moveLeft="right-middle";
            middleMove="right-middle-middle";
        }

        let galleryIndicator= imageUrl.map((item,index)=>{
            let isActive=this.state.middleListPosition===index;
            let className=['indicator'];
            if(isActive){
                className.push("isActive");
            }
            return (<div className={className.join(" ")} key={index}></div>);

        });



        return (
            <div className="photo-gallery">
                <div className="photo-gallery__photo">
                    <div  className={`photo-gallery__photo-left ${moveRight}`} style={this.state.transition?{}:{transition:"none"}}>
                        <img className="photo-gallery__img" src={imageUrl[this.state.leftListPosition]} alt="1"/>
                    </div>
                    <div  className={`photo-gallery__photo-middle ${middleMove}`} style={this.state.transition?{}:{transition:"none"}}>
                        <img className="photo-gallery__img" src={imageUrl[this.state.middleListPosition]} alt={this.state.middleListPosition}/>
                    </div>
                    <div  className={`photo-gallery__photo-right ${moveLeft}`} style={this.state.transition?{}:{transition:"none"}}>
                        <img className="photo-gallery__img" src={imageUrl[this.state.rightListPosition]} alt="3"/>
                    </div>
                </div>
                <button className="photo-gallery__btn-forward" onClick={this.moveForward}>&#60;</button>
                <button className="photo-gallery__btn-back" onClick={this.moveBack}>&#62;</button>
                <div className="photo-gallery__indicator">
                    {galleryIndicator}
                    
                </div>     
            </div>
        );
    }
}

export default PhotoGallery;