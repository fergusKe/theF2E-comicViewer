import React, { Component } from 'react';

import './ComicItem.scss';

const data = {
  comics: [
    {
      id: 1,
      title: "前端王",
      description:
        "相傳22年前，在一個童話般的世界裡，曾經擁有一切的前端王在走上賣雞排創業道路上對人們狂笑著：“想要我的技能是嗎？想要就給你們！去找吧！全部的寶藏都在那裡...”",
      cover: "./images/1.jpg"
    },
    {
      id: 2,
      title: "一鍵超人",
      description:
        "艾力克斯原本是一名忙於趕案的網頁設計師。數年前偶然遇到了異變瘋狂改稿人，激起了“想要成為工程師”的夢想，通過拼命鍛鍊，終於脫胎換骨獲得了一鍵完成專案的能力，但同時也失去了...",
      cover: "./images/2.jpg"
    },
    {
      id: 3,
      title: "我的前端學院",
      description:
        "故事發生在現代，世界上的很多人都會有程式能力。一個名叫艾力克斯的男孩卻沒有，不過他一直心懷夢想，為了成為前端工程師而奮發努力，到底他能不能成功呢...",
      cover: "./images/3.jpg"
    }
  ],
  detail: [
    {
      id: 1,
      title: "前端王",
      description:
        "相傳22年前，在一個童話般的世界裡，曾經擁有一切的前端王在走上賣雞排創業道路上對人們狂笑著：“想要我的技能是嗎？想要就給你們！去找吧！全部的寶藏都在那裡...”",
      cover: "/static/images/1.jpg",
      author: "猥甜容易郎",
      type: "網頁開發",
      score: 5,
      status: "連載中",
      chapters: [
        { id: 110, text: "第 10 話" },
        { id: 109, text: "第 9 話" },
        { id: 108, text: "第 8 話" },
        { id: 107, text: "第 7 話" },
        { id: 106, text: "第 6 話" },
        { id: 105, text: "第 5 話" },
        { id: 104, text: "第 4 話" },
        { id: 103, text: "第 3 話" },
        { id: 102, text: "第 2 話" },
        { id: 101, text: "第 1 話" }
      ]
    },
    {
      id: 2,
      title: "一鍵超人",
      description:
        "艾力克斯原本是一名忙於趕案的網頁設計師。數年前偶然遇到了異變瘋狂改稿人，激起了“想要成為工程師”的夢想，通過拼命鍛鍊，終於脫胎換骨獲得了一鍵完成專案的能力，但同時也失去了...",
      cover: "/static/images/2.jpg",
      author: "春甜熊戒",
      type: "網頁開發",
      score: 4,
      status: "連載中",
      chapters: [
        { id: 210, text: "第 10 話" },
        { id: 209, text: "第 9 話" },
        { id: 208, text: "第 8 話" },
        { id: 207, text: "第 7 話" },
        { id: 206, text: "第 6 話" },
        { id: 205, text: "第 5 話" },
        { id: 204, text: "第 4 話" },
        { id: 203, text: "第 3 話" },
        { id: 202, text: "第 2 話" },
        { id: 201, text: "第 1 話" }
      ]
    },
    {
      id: 3,
      title: "我的前端學院",
      description:
        "故事發生在現代，世界上的很多人都會有程式能力。一個名叫艾力克斯的男孩卻沒有，不過他一直心懷夢想，為了成為前端工程師而奮發努力，到底他能不能成功呢...”",
      cover: "/static/images/3.jpg",
      author: "哭月耕蘋",
      type: "網頁開發",
      score: 3,
      status: "連載中",
      chapters: [
        { id: 310, text: "第 10 話" },
        { id: 309, text: "第 9 話" },
        { id: 308, text: "第 8 話" },
        { id: 307, text: "第 7 話" },
        { id: 306, text: "第 6 話" },
        { id: 305, text: "第 5 話" },
        { id: 304, text: "第 4 話" },
        { id: 303, text: "第 3 話" },
        { id: 302, text: "第 2 話" },
        { id: 301, text: "第 1 話" }
      ]
    }
  ]
};

class ComicItem extends Component {
  render() {
    return (
      <div className="comics">
        {
          data.comics.map(comic => (
            <div key={comic.title} className="comicItem">
              <div
                className="cover"
                style={{backgroundImage: `url(${comic.cover})`}}
              />
              <div className="info">
                <h2 className="title">{comic.title}</h2>
                <p className="description">{comic.description}</p>
              </div>
            </div>
          ))
        }
      </div>
    );
  }
}

export default ComicItem;
