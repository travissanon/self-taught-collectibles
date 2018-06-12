import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import logo from './vector.svg'
import './style.scss'

import Header from '../components/header'

const data = [
  {
    id: 1,
    subCount: "11,111",
    name: "Dev Material",
    description: "Recently growing channel with tons of potential on teaching users how to create their own applications.",
    image: "https://s33.postimg.cc/6hqytlctb/27575199_225254798019972_8799385058805809152_n.jpg"
  },
  {
    id: 2,
    subCount: "11,111",
    name: "Ollier",
    description: "The official channel for a designer who is also a really good developer to be honest my dude.",
    image: "https://s33.postimg.cc/ocvy556jj/olliur.png"
  },
  {
    id: 3,
    subCount: "11,111",
    name: "Simple Mentor",
    description: "Blake currently runs quite a huge instagram and with that he’s also built out a series of tutorials for users.",
    image: "https://s33.postimg.cc/3sr46o67z/simple-mentor.png"
  },
  {
    id: 4,
    subCount: "11,111",
    name: "G_Eazy",
    description: "Currently he runs a channel with a lot of udacity deals so it’s a no brainer to go check this out.",
    image: "https://s33.postimg.cc/j1h1kfs6n/g-eazy.png"
  },
  {
    id: 5,
    subCount: "11,111",
    name: "Mayuko",
    description: "Her tutorials are by far one of the friendliest and most professional I’ve seen in a long time.",
    image: "https://s33.postimg.cc/6a2vdy5jz/mayuko.png"
  },
  {
    id: 6,
    subCount: "11,111",
    name: "Hunter Keca",
    description: "Rapidly growing and always up to something not good for you, this young guy is doing big things.",
    image: "https://s33.postimg.cc/kta0fd6en/hunter-keca.png"
  },
  {
    id: 7,
    subCount: "11,111",
    name: "Wes Bos",
    description: "If you don’t know about Wes Bos as of yet you must be under a rock.",
    image: "https://s33.postimg.cc/jqztwtvb3/wes-bos.png"
  },
  {
    id: 8,
    subCount: "11,111",
    name: "Kim Goulbourne",
    description: "She’s constantly pumping out content for everyone on the world, don’t sleep on this please.",
    image: "https://s33.postimg.cc/efkxc2ji7/kim-goulbourne.png"
  },
  {
    id: 9,
    subCount: "11,111",
    name: "Joma Tech",
    description: "Discovered his videos at first by looking up what it takes to work at one of these companies like facebook.",
    image: "https://s33.postimg.cc/b8qdsh1n3/joma-tech.png"
  },
  {
    id: 10,
    subCount: "11,111",
    name: "Chase Jarvis",
    description: "Instantly a funny guy to always resort to his content for educational and a pick me up.",
    image: "https://s33.postimg.cc/6mu9k35tb/chase-jarvis.png"
  },
  {
    id: 11,
    subCount: "11,111",
    name: "Simple Mentor",
    description: "Blake currently runs quite a huge instagram and with that he’s also built out a series of tutorials for users.",
    image: "https://s33.postimg.cc/3sr46o67z/simple-mentor.png"
  }
];

const SecondPage = () => {
  return (
      <div>
        <Header/>
        <div className="container-2">
          <div className="head">
            <h1>Front End Development</h1>
            <p>This section derives of majority anyone who's really spreading the knowledge of your front-end section of a website. So expect a lot of <span>HTML, CSS, Javascript</span> like tutorials.</p>
          </div>
          <People/>
        </div>
      </div>
  );
}

class People extends React.Component {
  render() {
    let listOfPeople = [];
    data.map((user, i) => {
      listOfPeople.push(<Person yeet={user} key={user.id}/>)
    })
    return <div className="people">{listOfPeople}</div>
  }
}

const Person = ({ yeet, key }) => {
  return (
    <div className="person">
      <img src={yeet.image}/>
      <p>Sub Count: {yeet.subCount}</p>
      <h2>{yeet.name}</h2>
      <p className="desc">{yeet.description}</p>
    </div>
  );
}

export default SecondPage

// export const query = graphql`
//   query peopleDataQuery {
//     site {
//       siteMetadata {
//         people {
//           id
//           subCount
//           name
//           description
//           image
//         }
//       }
//     }
//   }
// `