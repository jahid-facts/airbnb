
import React, { useState } from 'react';
import { Container, Grid, Paper, Tabs, Tab, Avatar, IconButton, Typography, ButtonGroup, Button, Box, Divider } from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';

export const Feed = () => {
  const [value, setValue] = useState(0);
  const [isUploadOpen, setUploadOpen] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const toggleUpload = () => {
    setUploadOpen(!isUploadOpen);
  };

  return (
    <>
      <Box sx={{ bgcolor: '#E8E9FE' }}>
        <Container>
          <Grid container spacing={2} >
            <Grid item xs={4}>
              <Paper elevation={3}
                style={{
                  padding: '20px',
                  position: 'relative',
                  backgroundColor: 'transparent',
                  boxShadow: 'none',
                }}
              >
                <Avatar
                  alt="User Avatar"
                  src="/src/assets/images/avatar.png"
                  sx={{
                    width: 180,
                    height: 180,
                    margin: '0 auto',
                    marginBottom: '10px',
                    position: 'relative',
                    cursor: 'pointer',
                    border: '3px solid #eee',
                    borderRadius: '50%',
                  }}
                  onMouseEnter={toggleUpload}
                  onMouseLeave={toggleUpload}
                >
                  {isUploadOpen && (
                    <div style={{ position: 'absolute', bottom: '10px', right: '28px' }}>
                      <input
                        accept="image/*"
                        style={{ display: 'none' }}
                        id="upload-button"
                        type="file"
                      />
                      <label htmlFor="upload-button">
                        <IconButton component="span">
                          <PhotoCamera />
                        </IconButton>
                      </label>
                    </div>
                  )}
                </Avatar>
                <Box style={{ textAlign: 'center', margin: '10px' }}>
                  <Typography variant="h6" gutterBottom>
                    Salma Hayek
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom>
                    USA
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom>
                    Software Engineer at Company.Inc
                  </Typography>
                  <ButtonGroup
                    variant="outlined"
                    aria-label="outlined button group"
                  >
                    <Button style={{ border: '2px solid', fontWeight: 'bold' }}>Following</Button>
                    <Button style={{ border: '2px solid', fontWeight: 'bold' }}>Follower</Button>
                  </ButtonGroup>
                </Box>
                <Box
                  sx={{
                    marginTop: '36px'
                  }}
                >
                  <Typography variant="subtitle1" gutterBottom>
                    ABOUT
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                    neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                    quasi quidem quibusdam.
                  </Typography>
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={8}>
              <Paper
                elevation={3}
                style={{
                  backgroundColor: 'transparent',
                  boxShadow: 'none'
                }}
              >
                <Tabs
                  value={value}
                  onChange={handleChange}
                  indicatorColor="primary"
                  textColor="primary"
                  variant="fullWidth"
                  aria-label="Profile Tabs"
                >
                  <Tab
                    label="Activities"
                    sx={{
                      fontWeight: 'bold',
                      '&:hover, &:focus': {
                        backgroundColor: 'white',
                        borderBottom: '4px solid #1976d2',
                      },
                    }}
                  />
                  <Tab
                    label="Followers"
                    sx={{
                      fontWeight: 'bold',
                      '&:hover, &:focus': {
                        backgroundColor: 'white',
                        borderBottom: '4px solid #1976d2',
                      },
                    }}
                  />
                  <Tab
                    label="Followings"
                    sx={{
                      fontWeight: 'bold',
                      '&:hover, &:focus': {
                        backgroundColor: 'white',
                        borderBottom: '4px solid #1976d2',
                      },
                    }}
                  />
                  <Tab
                    label="My Events"
                    sx={{
                      fontWeight: 'bold',
                      '&:hover, &:focus': {
                        backgroundColor: 'white',
                        borderBottom: '4px solid #1976d2',
                      },
                    }}
                  />
                </Tabs>
                <Divider style={{ marginBottom: '15px', marginTop: '-3px', border: '2px solid #d7d5e9', }}></Divider>
                <Box >
                  {/* Content for each tab */}
                  <div role="tabpanel" style={{
                    backgroundColor: 'white', padding: '14px'
                  }}>
                    {value === 0 && <Tab1Content />}
                    {value === 1 && <Tab2Content />}
                    {value === 2 && <Tab3Content />}
                    {value === 3 && <Tab4Content />}
                  </div>
                </Box>

              </Paper>
            </Grid>
          </Grid>
        </Container >
      </Box >
    </>
  );
}

function Tab1Content() {
  return <div >
    <h4 >All Activities</h4>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus doloremque dolore vitae cum quibusdam quaerat dicta, rem nostrum itaque obcaecati cumque corporis assumenda qui, tempora accusantium odit nesciunt tenetur ea.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dignissimos aspernatur laboriosam, laborum mollitia natus consequatur voluptate, neque alias molestiae magni quaerat, quis unde recusandae dolor. Repellat inventore ad iure voluptatem libero! Exercitationem aspernatur eum perferendis ullam, laborum alias? Delectus saepe temporibus repellat. Eaque aut unde fugit veniam id voluptas officia quo explicabo delectus illum velit totam saepe dolorum, cupiditate voluptatibus cumque fuga, dolorem illo minus vel quisquam enim dolore? Possimus voluptatum dolor tempore, officiis deleniti sunt numquam magni repudiandae iusto cupiditate, aspernatur, deserunt voluptatem dolores placeat! Et nam dolores veritatis numquam rem reiciendis facilis, atque dignissimos quidem. Beatae, distinctio.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dignissimos aspernatur laboriosam, laborum mollitia natus consequatur voluptate, neque alias molestiae magni quaerat, quis unde recusandae dolor. Repellat inventore ad iure voluptatem libero! Exercitationem aspernatur eum perferendis ullam, laborum alias? Delectus saepe temporibus repellat. Eaque aut unde fugit veniam id voluptas officia quo explicabo delectus illum velit totam saepe dolorum, cupiditate voluptatibus cumque fuga, dolorem illo minus vel quisquam enim dolore? Possimus voluptatum dolor tempore, officiis deleniti sunt numquam magni repudiandae iusto cupiditate, aspernatur, deserunt voluptatem dolores placeat! Et nam dolores veritatis numquam rem reiciendis facilis, atque dignissimos quidem. Beatae, distinctio.</p>
  </div>;
}

function Tab2Content() {
  return <div>

    <h4>  All Followers</h4>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus doloremque dolore vitae cum quibusdam quaerat dicta, rem nostrum itaque obcaecati cumque corporis assumenda qui, tempora accusantium odit nesciunt tenetur ea.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dignissimos aspernatur laboriosam, laborum mollitia natus consequatur voluptate, neque alias molestiae magni quaerat, quis unde recusandae dolor. Repellat inventore ad iure voluptatem libero! Exercitationem aspernatur eum perferendis ullam, laborum alias? Delectus saepe temporibus repellat. Eaque aut unde fugit veniam id voluptas officia quo explicabo delectus illum velit totam saepe dolorum, cupiditate voluptatibus cumque fuga, dolorem illo minus vel quisquam enim dolore? Possimus voluptatum dolor tempore, officiis deleniti sunt numquam magni repudiandae iusto cupiditate, aspernatur, deserunt voluptatem dolores placeat! Et nam dolores veritatis numquam rem reiciendis facilis, atque dignissimos quidem. Beatae, distinctio.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dignissimos aspernatur laboriosam, laborum mollitia natus consequatur voluptate, neque alias molestiae magni quaerat, quis unde recusandae dolor. Repellat inventore ad iure voluptatem libero! Exercitationem aspernatur eum perferendis ullam, laborum alias? Delectus saepe temporibus repellat. Eaque aut unde fugit veniam id voluptas officia quo explicabo delectus illum velit totam saepe dolorum, cupiditate voluptatibus cumque fuga, dolorem illo minus vel quisquam enim dolore? Possimus voluptatum dolor tempore, officiis deleniti sunt numquam magni repudiandae iusto cupiditate, aspernatur, deserunt voluptatem dolores placeat! Et nam dolores veritatis numquam rem reiciendis facilis, atque dignissimos quidem. Beatae, distinctio.</p>
  </div>;
}

function Tab3Content() {
  return <div>

    <h4> All Followings </h4>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus doloremque dolore vitae cum quibusdam quaerat dicta, rem nostrum itaque obcaecati cumque corporis assumenda qui, tempora accusantium odit nesciunt tenetur ea.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dignissimos aspernatur laboriosam, laborum mollitia natus consequatur voluptate, neque alias molestiae magni quaerat, quis unde recusandae dolor. Repellat inventore ad iure voluptatem libero! Exercitationem aspernatur eum perferendis ullam, laborum alias? Delectus saepe temporibus repellat. Eaque aut unde fugit veniam id voluptas officia quo explicabo delectus illum velit totam saepe dolorum, cupiditate voluptatibus cumque fuga, dolorem illo minus vel quisquam enim dolore? Possimus voluptatum dolor tempore, officiis deleniti sunt numquam magni repudiandae iusto cupiditate, aspernatur, deserunt voluptatem dolores placeat! Et nam dolores veritatis numquam rem reiciendis facilis, atque dignissimos quidem. Beatae, distinctio.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dignissimos aspernatur laboriosam, laborum mollitia natus consequatur voluptate, neque alias molestiae magni quaerat, quis unde recusandae dolor. Repellat inventore ad iure voluptatem libero! Exercitationem aspernatur eum perferendis ullam, laborum alias? Delectus saepe temporibus repellat. Eaque aut unde fugit veniam id voluptas officia quo explicabo delectus illum velit totam saepe dolorum, cupiditate voluptatibus cumque fuga, dolorem illo minus vel quisquam enim dolore? Possimus voluptatum dolor tempore, officiis deleniti sunt numquam magni repudiandae iusto cupiditate, aspernatur, deserunt voluptatem dolores placeat! Et nam dolores veritatis numquam rem reiciendis facilis, atque dignissimos quidem. Beatae, distinctio.</p>
  </div>;
}

function Tab4Content() {
  return <div>

    <h4>All My Events</h4>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus doloremque dolore vitae cum quibusdam quaerat dicta, rem nostrum itaque obcaecati cumque corporis assumenda qui, tempora accusantium odit nesciunt tenetur ea.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dignissimos aspernatur laboriosam, laborum mollitia natus consequatur voluptate, neque alias molestiae magni quaerat, quis unde recusandae dolor. Repellat inventore ad iure voluptatem libero! Exercitationem aspernatur eum perferendis ullam, laborum alias? Delectus saepe temporibus repellat. Eaque aut unde fugit veniam id voluptas officia quo explicabo delectus illum velit totam saepe dolorum, cupiditate voluptatibus cumque fuga, dolorem illo minus vel quisquam enim dolore? Possimus voluptatum dolor tempore, officiis deleniti sunt numquam magni repudiandae iusto cupiditate, aspernatur, deserunt voluptatem dolores placeat! Et nam dolores veritatis numquam rem reiciendis facilis, atque dignissimos quidem. Beatae, distinctio.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dignissimos aspernatur laboriosam, laborum mollitia natus consequatur voluptate, neque alias molestiae magni quaerat, quis unde recusandae dolor. Repellat inventore ad iure voluptatem libero! Exercitationem aspernatur eum perferendis ullam, laborum alias? Delectus saepe temporibus repellat. Eaque aut unde fugit veniam id voluptas officia quo explicabo delectus illum velit totam saepe dolorum, cupiditate voluptatibus cumque fuga, dolorem illo minus vel quisquam enim dolore? Possimus voluptatum dolor tempore, officiis deleniti sunt numquam magni repudiandae iusto cupiditate, aspernatur, deserunt voluptatem dolores placeat! Et nam dolores veritatis numquam rem reiciendis facilis, atque dignissimos quidem. Beatae, distinctio.</p>
  </div>;
}
