import React from 'react';

//This component was the main content of our page
//This component scrapes information from the web and displays articles regarding the topic of choice

const News3 = ({news}) => {
    //Access the data from the information scraped, into the first category of information
    //this should be from one site
    //we map these into an array as <a> tags so we can click them and be redirected to the respective sites
    const articles = news[2].map((el, i) => {
        return (
            <React.Fragment>
                <article className="pair">
                    <img className="picture" src={el.picture}/>
                    <a className="newsEntry" key={i} href={el.link}>{el.title}</a>
                </article>
                <hr/>
            </React.Fragment>)
    })
    //We render sections within our container so that they can maybe be styles differently if we'd like
    //these are spread with a user-interactable way of refreshing the articles
    return ( 
        <section className="news" id="news3">
            {articles}
        </section>
     );
}
 
export default News3;