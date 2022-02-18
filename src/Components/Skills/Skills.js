import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import "./Skills.css";
import { Card, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Icon } from "@iconify/react";


export default function Skills() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const skillsFrontend = [
    {
        name: 'HTML 5',
        icon: <Icon icon="logos:html-5" width="60" height="60" />,
        // label: 'HTML 5'
    },
    {
        name: 'CSS 3',
        icon: <Icon icon="logos:css-3" width="60" height="60" />
    },
    {
        name: 'JavaScript',
        icon: <Icon icon="logos:javascript" width="60" height="60" />
    },
    {
        name: 'React',
        icon: <Icon icon="logos:react" width="60" height="60" />
    },
    {
        name: 'Bootstrap',
        icon: <Icon icon="logos:bootstrap" width="60" height="60" />
    },
    {
        name: 'Material UI',
        icon: <Icon icon="logos:material-ui" width="60" height="60" />
    },
    {
        name: 'Adobe XD',
        icon: <Icon icon="cib:adobe-xd" color="#470137" width="60" height="60"/>
    }
  ]

  const skillsBackend = [
    {
        name: 'Node JS',
        icon: <Icon icon="logos:nodejs-icon" width="60" height="60" />
    },
    {
        name: 'Express',
        icon: <Icon icon="simple-icons:express" width="60" height="60" />
    },
    {
        name: 'Mongo DB',
        icon: <Icon icon="vscode-icons:file-type-mongo" width="60" height="60" />
    },
    {
        name: 'My SQL',
        icon: <Icon icon="logos:mysql" width="60" height="60" />
    },
    {
        name: 'PostgreSQL',
        icon: <Icon icon="logos:postgresql" width="60" height="60" />
    },
    {
        name: 'Github',
        icon: <Icon icon="logos:github-octocat" width="60" height="60" />
    },
    
  ]

  const agileTool = [
    {
        name: '',
        icon: <Icon icon="logos:trello" width="60" height="60" />
    },
    
    
  ]

  return (
    <>
      <header className="contact_header">
          <hr />
          <Icon icon="et:gears" color="#5987b6" width="50" height="50" />
          <h3>Skills</h3>
          <hr />
      </header>
      
      <Box  className="skills_container">
        <div className="card_box_skills">
          <Card 
            sx={{
              
              p: 1,
              display: "grid",
              gap: 10,
              margin: 10,
              padding: 10,
              border: 'none',
              
            }}
          >
            <div className="frontend_title">
                  <div className="frontend_title_box">
                    <h3>Frontend Development</h3>
                    <Icon icon="ep:d-arrow-right" color="#153b61" width="30" height="30" />
                  </div>
                
              {skillsFrontend.map ((skillsFrontend,id) =>
                <div className="skills_left_container">
                  <div className="item_icons">
                      <Stack
                        direction="row"
                        // divider={<Divider orientation="vertical" flexItem />}
                        spacing={4}
                      >
                        <Item>
                          {skillsFrontend.icon}
                          
                        </Item>
                      </Stack>
                  </div>
                </div>
              )}
            </div>
            <div className="backend_title">
                  <div className="backend_title_box">
                    <h3>Backend Development</h3>
                    <Icon icon="ep:d-arrow-right" color="#153b61" width="30" height="30" />
                  </div>
                
              {skillsBackend.map ((skillsBackend,id) =>
                <div className="skills_left_container">
                  <div className="item_icons">
                      <Stack
                        direction="row"
                        // divider={<Divider orientation="vertical" flexItem />}
                        spacing={4}
                      >
                        <Item>
                          {skillsBackend.icon}
                        </Item>
                      </Stack>
                  </div>
                </div>
              )}
            </div>

            <div className="agile_tool_title">
                  <div className="agile_tool_title_box">
                    <h3>Agile Tool Methodologie</h3>
                    <Icon icon="ep:d-arrow-right" color="#153b61" width="30" height="30" />
                  </div>
                
              {agileTool.map ((agileTool,id) =>
                <div className="skills_left_container">
                  <div className="item_icons">
                      <Stack
                        direction="row"
                        // divider={<Divider orientation="vertical" flexItem />}
                        spacing={4}
                      >
                        <Item>
                          {agileTool.icon}
                        </Item>
                      </Stack>
                  </div>
                </div>
              )}
            </div>
                
              
            
          </Card>
          
        </div>
        
      </Box>
      
    </>
  );
}
