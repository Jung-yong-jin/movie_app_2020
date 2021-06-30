import React from 'react';
import {Link} from 'react-router-dom';
import './Navigation.css'

function Navigation(){
    //a 엘리먼트의 href 속성은 페이지 전체를 다시 그리기 때문에 부분만 다시 그려주는 리액트의 장점을 활용하기 힘듬
    //react-router-dom의 Link 컴포넌트를 사용하면 해결
    return (
        <div className="nav">
            <Link to="/">Home</Link>
            <Link to={{pathname: '/about', state: {fromNavigation: true}}} >About</Link>
        </div>
    );
}

export default Navigation;