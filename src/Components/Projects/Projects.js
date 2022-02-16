import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import bespoke from "./../Images/BF_Logo.png";
import photopedia from "./../Images/photopedia_logo_transparent.png";
import healthyLife from "./../Images/Healthy Life-logos_transparent.png";
import easyPeasy from "./../Images/easy_peasy-logo_transparent.png";
import './Projects.css';
import Paper from "@mui/material/Paper";


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
      name: "Bespoke Fashion",
      description: "Here the customer will be able to custumize your own outfit, choosing the design, prints or colors.",
      image: bespoke,
      github: "https://github.com/Francine-Pepe/bespokefashion",
      link: "https://bespokefashion.netlify.app/",
    },
    {
      name: "Photopedia",
      description: "Website made from photografers for photografers",
      image: photopedia,
      github: "https://github.com/TheCodingBrie/Photopedia",
      link: "",
    },
    {
      name: "Healthy Life",
      description:
        "A place that reunites everything to have a good and healthy life",
      image: healthyLife,
      github: "https://github.com/jennyy89/healthylife",
      link: "",
    },
    {
      name: "Easy Peasy",
      description: "Food blog with all kinds of easy food",
      image: easyPeasy,
      github: "https://github.com/garciamarin/Easy-Peasy",
      link: "",
    },
  ];

  
  return (
    <>
    
    <div className="cards_container">
    
      <div className="card_box">
      
        <Card sx={{ 
                    p: 2,
                    display: 'grid',
                    gridTemplateColumns: { md: '1fr 1fr 1fr' },
                    gap:10 ,
                    margin:10,
                    padding: 10,
                    border: 1,
                  }}
        >
        {projects.map ((projects,id) =>
        
        <div >
          <Card className="cards"
          sx={{ 
            boxShadow: "5px 5px 5px 5px #E8E8E8",
            shadowRadius: 2,
            elevation: 10,
            }}
          >
            <Typography className="cards_title" fontSize='1.8rem' color="text.secondary" fontFamily='Roboto Slab' >
              {projects.name}
            </Typography> 
            <CardMedia
              component="img"
              height="194"
              image={projects.image}
              alt="project name"
            />
            <CardContent>
              <Typography className="cards_text" fontSize='1.1rem' color="text.secondary"
                sx={{ 
                  fontFamily: 'Roboto Slab',
                  }}
              >
                {projects.description}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
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
              <CardContent>
                
              </CardContent>
            </Collapse>
            
          </Card> 
          
        </div>
        )}
      </Card>
      
      </div>
    </div> 
    
  </>
  );
}
