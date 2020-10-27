import React, {Component} from 'react';

class Portfolio extends Component {
    render() {

        if (this.props.data) {
            var projects = this
                .props
                .data
                .projects
                .map(function (projects) {
                    var projectImage = 'images/portfolio/' + projects.image;
                    return <div key={projects.title} className="columns portfolio-item">
                        <div className="item-wrap">
                            <a href={projects.url} title={projects.title}>
                                <img alt={projects.title} src={projectImage}/>
                                <h5 style={{display:"flex", justifyContent:"center"}}>{projects.title}</h5>
                                <div className="overlay">
                                    <div className="portfolio-item-meta">
                                        <h5>{projects.title}</h5>
                                        <p>{projects.category}</p>
                                    </div>
                                </div>
                                <div className="link-icon">
                                    <i className="fa fa-link"></i>
                                </div>
                            </a>
                        </div>
                    </div>
                })
        }

        return (
            <section id="portfolio">

                <div className="row">

                    <div className="twelve columns collapsed">

                        <h1 >Click the Image to Check Out Some of The Code From My Favorite Projects Thus Far.</h1>

                        <ul
                            id="portfolio-wrapper"
                            className="bgrid-quarters s-bgrid-thirds cf"
                            style={{
                            display: "flex",
                            justifyContent: "center"
                        }}>
                            <li>{projects}</li>
                        </ul>
                    </div>
                </div>
            </section>
        );
    }
}

export default Portfolio;
