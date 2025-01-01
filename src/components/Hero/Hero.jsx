import React, { useEffect, useState } from 'react';
import './hero.css';
import Image from '../Image/Image';
import Button from '../Button/Button';

const Hero = () => {
  const [count, setCount] = useState(0);
  const [values, setValues] = useState([]);
  const displayLimit = 6;

  useEffect(() => {
    const fetchData = async (url) => {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        setValues(data);
        console.log(data);
      } catch (err) {
        console.log(
          'Something went wrong while fetching the data: ',
          err.message
        );
      }
    };
    fetchData('https://jsonplaceholder.typicode.com/users');
  }, []);

  const ClickHandler = () => {
    setCount(count + 1);
    console.log('Button is clicked');
  };

  return (
    <>
      <div className="conatainer">
        <h1>fetch data with api</h1>
        <div className="card">
          {values
            .slice(0, displayLimit)
            .map(({ id, username, name, phone, address }) => {
              return (
                <div className="items" key={id}>
                  <Image />
                  <h5>{username}</h5>
                  <h4>{name} </h4>
                  <span>{address.city}</span>
                  <div>
                    <Button ClickHandler={ClickHandler} ct={count} />
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Hero;
