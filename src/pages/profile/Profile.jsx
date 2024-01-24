import React from "react";
import { Container, Stack } from "@mui/material";
import Sidebar from "../../components/Sidebar";
import AppLayout from "../../layouts/appLayout";
import Feed from "../../components/Feed";

export default function Profile() {
  return (
    <AppLayout>
      <Container maxWidth="xl">
        <Stack direction="row" spacing={2} justifyContent="space-between">
          {/* <Sidebar /> */}
          <Feed />
        </Stack>
      </Container>
    </AppLayout>
  );
}
