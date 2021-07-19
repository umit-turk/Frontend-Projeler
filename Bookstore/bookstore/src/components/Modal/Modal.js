import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import "./Modal.css";

const Modal = ({result}) => {


  return <div className="container">
      <div className="detail-img"><img src={result.volumeInfo.imageLinks.thumbnail} /></div>
      <div className="Book-name" >Kitap Adı: {result.volumeInfo.title}</div>  
      <div className="author-name">Yazar: {result.volumeInfo.authors}</div>
      <div className="book-description">Açıklama: {result.volumeInfo.description}</div>
      <div className="book-publisher">Yayın Evi: {result.volumeInfo.publisher}</div>
      <div className="book-published-date">Basım: {result.volumeInfo.publishedDate}</div>
      <div className="book-price">Fiyat: {result.saleInfo.listPrice?.amount || 20} TL</div>
      <Link to="/">geri dön</Link>
  </div>;
};

export default Modal;
