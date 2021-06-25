import React from 'react';
import Potato from './Potato'
import PropTypes from 'prop-types'

function Photo(param){
  //구조 분해 할당
  //구조 분해 할당 구문은 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 하는 javascript
  let {name , number} = param;
  return <h1>I like Photo : {name} .No : {number +2} </h1>
}

function Food(props) {
  return <h1>I like {props.fav}</h1>;
}



function FoodImg(props){
  return (<div>
          <h1>Food Name : {props.name}</h1>
          FoodImage : <img src={props.image} alt={props.name} width="200"/>
          </div>
          );
}

const foodIlike =[{ id: 1,
                    name: 'Kimche',
                    image: 'https://www.maangchi.com/wp-content/uploads/2014/06/whole-cabbage-kimchi.jpg',
                    rating: 4.9,
                 },
                 { id: 2,
                    name: 'Samgyeopsal',
                    image: 'https://newsimg.hankookilbo.com/cms/articlerelease/2020/06/11/202006111362061920_7.jpg',
                    rating: 2.9,
                 }];

function renderFood(dish){
  return <FoodSecond key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />;
}                 

function FoodSecond({name, picture, rating}){
  return(
    <div>
      <h2>I like {name}</h2>
      <h4>{rating} / 5.0</h4>
      <img src={picture} alt={name} width="200"/>
    </div>
  )
}
//let obj = {'one':'일', 'toow': '둘'};

FoodSecond.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
}


function App() {
  //return <div className="App" />
  return (
    <div>
      <h1>Hello</h1>
      <Potato/>
      <Photo name="사진 제주" number={1}/>
      <Photo name="사진 강원" number={1}/>
      <Photo name="사진 속초" number={1}/>
      <Photo name="사진 가평" number={1}/>
      <Photo name="사진 영월" number={1}/>
      <Food fav="kimchi"  />
      <Food fav="Burger"  />
      <Food fav="돈가스"  />
      {foodIlike.map(dish => (
        <FoodImg key={dish.id} name={dish.name} image={dish.image}/>
      ))}
      {foodIlike.map(renderFood)}

    </div>
  );
}

export default App;
