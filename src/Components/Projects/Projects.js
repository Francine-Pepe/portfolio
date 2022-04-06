import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import bespoke from "./../Images/BF_Logo.png";
import photopedia from "./../Images/photopedia_logo_transparent.png";
import healthyLife from "./../Images/Healthy Life-logos_transparent.png";
import easyPeasy from "./../Images/easy_peasy-logo_transparent.png";
import "./Projects.css";
import { Icon } from "@iconify/react";


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Projects() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const projects = [
    {
      id: "0",
      name: "Bespoke Fashion",
      description:
        "Here the customer will be able to choose the design, prints or colors.",
      image: bespoke,
      github: "https://github.com/Francine-Pepe/bespokefashion",
      link: "https://bespokefashion.netlify.app/",
      technologies:
        "React JS  |  MongoDB  |  Node JS  |  Express  |  Material UI  |  React Bootstrap  |  Adobe XD",
    },
    {
      id: "1",
      name: "Photopedia",
      description: "Website made from photografers for photografers",
      image: photopedia,
      github: "https://github.com/TheCodingBrie/Photopedia",
      link: "",
      technologies:
        "React JS  |  MongoDB  |  Node JS  |  Express  |  Material UI  |  React Bootstrap  |  Adobe XD",
    },
    {
      id: "2",
      name: "Healthy Life",
      description:
        "A place that brings together everything for a good and healthy life",
      image: healthyLife,
      github: "https://github.com/jennyy89/healthylife",
      link: "",
      technologies: "React JS |  React Bootstrap  |  Contentful  |  Adobe XD",
    },
    {
      id: "3",
      name: "Easy Peasy",
      description: "Food blog with all kinds of easy food",
      image: easyPeasy,
      github: "https://github.com/garciamarin/Easy-Peasy",
      link: "",
      technologies: "HTML 5 |  CSS 3  |  Bootstrap  |  Adobe XD",
    },
  ];

  return (
    <>
      <header
        className="contact_header"
        id="projects"
        style={{ marginTop: "16rem" }}
      >
        <hr />
        <Icon
          icon="ic:outline-computer"
          color="#5987b6"
          width="50"
          height="50"
        />
        <h3>Projects</h3>
        <hr />
      </header>

      <div className="cards_container">
        <div className="card_box">
          <Card
            sx={{
              p: 1,
              display: "grid",
              gridTemplateColumns: {
                xl: "1fr 1fr 1fr",
                lg: "1fr 1fr",
                md: "1fr 1fr",
                sm: "1fr",
              },
              gap: 10,
              margin: 10,
              padding: 10,
              border: "none",
              
            }}
          >
            {projects.map((projects, id, item) => (
              <div>
                <Card
                  className="cards"
                  sx={{
                    boxShadow: "5px 5px 5px 5px #E8E8E8",
                    shadowRadius: 2,
                    elevation: 10,
                    
                  }}
                >
                  <Typography
                    className="cards_title"
                    fontSize="1.8rem"
                    color="text.secondary"
                    fontFamily="Roboto Slab"
                  >
                    {projects.name}
                  </Typography>
                  <hr className="line" />
                  <CardMedia
                    component="img"
                    height="194"
                    image={projects.image}
                    alt="project name"
                  />
                  <CardContent>
                    <Typography
                      className="cards_text"
                      fontSize="0.9rem"
                      color="text.secondary"
                      sx={{
                        fontFamily: "Roboto Slab",
                      }}
                    >
                      {projects.description}
                    </Typography>
                    <hr className="line" />
                    <div className="button_container">
                      <button className="visit_button" style={{ display: projects.link ? "block" : "none" }}>
                        <a
                          href={projects.link}
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          VISIT
                        </a>
                      </button>
                      <button className="visit_button" style={{ display: projects.github ? "block" : "none" }}>
                        <a
                          href={projects.github}
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          REPO
                        </a>
                      </button>
                    </div>
                  </CardContent>
                  <CardActions disableSpacing>
                    <div className="technologies_title">
                      <h4>This Project was made with:</h4>
                    </div>
                    <ExpandMore
                      expand={expanded}
                      onClick={handleExpandClick}
                      aria-expanded={expanded}
                      aria-label="show more"
                    >
                      <ExpandMoreIcon />
                    </ExpandMore>
                  </CardActions>
                  <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent className="card_content">
                      {projects.technologies}
                    </CardContent>
                  </Collapse>
                </Card>
              </div>
            ))}
          </Card>
        </div>
      </div>
    </>
  );
}

