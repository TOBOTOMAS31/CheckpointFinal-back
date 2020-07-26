import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from './Navbar';
import Home from './Home';
import './picDetail.scss';

const PicDetail = (props) => {
  const [picDatas, setPicData] = useState([]);
  const { pic_id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`/pics/${pic_id}`).catch(function (error) {
        console.log(error.toJSON());
      });
      setPicData([result.data]);
    };
    fetchData();
  }, []);

  const url = window.location.href.split('/');
  console.log(url);
  const currentPic = url

  return (
    <div className="picDetail">
        <Navbar />
      {picDatas.map((pic) => {
        return (
          <div>
            <img className="pic" src={pic.pic_link} alt={pic.pic_name} />
          </div>
        );
      })}
      <Home />
    </div>
  );
};

PicDetail.propTypes = {};

export default PicDetail;
