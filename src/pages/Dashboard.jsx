import { useState, useEffect } from "react";
import {
  AppBar, Toolbar, Typography, Button, Container, Grid, Card,
  CardContent, CardHeader, Tabs, Tab, Box, Dialog, DialogTitle,
  DialogContent, DialogActions, TextField, List, ListItem,
  ListItemText, CircularProgress
} from "@mui/material";
import { Logout, Visibility, Download, Share, Shield } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Dashboard() {
  const [files, setFiles] = useState([]);
  const [tab, setTab] = useState(0);
  const [selectedFile, setSelectedFile] = useState(null);
  const [decryptedPreview, setDecryptedPreview] = useState("");
  const [openSendDialog, setOpenSendDialog] = useState(false);
  const [users, setUsers] = useState([]);
  const [loadingUsers, setLoadingUsers] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // load files (dummy now)
    setFiles([
      {
        id: 1,
        name: "report.pdf",
        size: 102400,
        uploadedBy: "me",
        uploadedAt: new Date().toISOString(),
        encryptedAESKey: "xxxx...",
        iv: "yyyy...",
        encryptedData: "zzzz...",
      },
    ]);
  }, []);

  const formatSize = (bytes) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/signup");
  };

  const handleOpenSendDialog = async () => {
    setOpenSendDialog(true);
    setLoadingUsers(true);
    try {
      const res = await axios.get("/api/users/public-keys");
      setUsers(res.data.data);
    } catch (error) {
      console.error("Failed to fetch users", error);
    } finally {
      setLoadingUsers(false);
    }
  };

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#f9fafb" }}>
      {/* Header */}
      <AppBar position="static" color="default" elevation={1}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box display="flex" alignItems="center" gap={1}>
            <Shield color="primary" />
            <Box>
              <Typography variant="h6" fontWeight="bold">
                SecureShare
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Welcome, user@example.com
              </Typography>
            </Box>
          </Box>
          <Button
            variant="outlined"
            startIcon={<Logout />}
            color="error"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      {/* Tabs */}
      <Container sx={{ py: 4 }}>
        <Tabs value={tab} onChange={(e, newValue) => setTab(newValue)} centered>
          <Tab label="My Files" />
          <Tab label="Access Logs" />
          <Tab label="Send File" />
        </Tabs>

        {/* My Files */}
        {tab === 0 && (
          <Grid container spacing={3} sx={{ mt: 2 }}>
            {files.map((file) => (
              <Grid item xs={12} sm={6} md={4} key={file.id}>
                <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
                  <CardHeader
                    title={file.name}
                    subheader={formatSize(file.size)}
                    avatar={<Shield color="success" />}
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      Uploaded on {new Date(file.uploadedAt).toLocaleDateString()}
                    </Typography>
                    <Box mt={2} display="flex" gap={1}>
                      <Button
                        variant="outlined"
                        size="small"
                        startIcon={<Visibility />}
                        onClick={() => setSelectedFile(file)}
                      >
                        View
                      </Button>
                      <Button
                        variant="outlined"
                        size="small"
                        startIcon={<Download />}
                        onClick={() => alert("Decrypt & Download")}
                      >
                        Download
                      </Button>
                      <Button
                        variant="outlined"
                        size="small"
                        startIcon={<Share />}
                        onClick={handleOpenSendDialog}
                      >
                        Send
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}

        {/* Access Logs */}
        {tab === 1 && (
          <Box mt={4}>
            <Typography variant="h6">Access Logs</Typography>
            <Typography variant="body2" color="text.secondary">
              (You can render a table of file actions here)
            </Typography>
          </Box>
        )}

        {/* Send File Section */}
        {tab === 2 && (
          <Box mt={4} textAlign="center">
            <Typography variant="h6" gutterBottom>
              Send Files Securely
            </Typography>
            <Button variant="contained" onClick={handleOpenSendDialog}>
              Choose Recipient
            </Button>
          </Box>
        )}
      </Container>

      {/* File Preview Dialog (unchanged) */}
      <Dialog open={!!selectedFile} onClose={() => setSelectedFile(null)} maxWidth="md" fullWidth>
        <DialogTitle>File Preview: {selectedFile?.name}</DialogTitle>
        <DialogContent dividers>
          <Typography variant="body2" gutterBottom>
            Encrypted AES Key:
          </Typography>
          <TextField fullWidth multiline value={selectedFile?.encryptedAESKey || ""} InputProps={{ readOnly: true }} sx={{ mb: 2 }} />
          <Typography variant="body2" gutterBottom>
            Initialization Vector (IV):
          </Typography>
          <TextField fullWidth multiline value={selectedFile?.iv || ""} InputProps={{ readOnly: true }} sx={{ mb: 2 }} />
          <Typography variant="body2" gutterBottom>
            Encrypted File Data:
          </Typography>
          <TextField fullWidth multiline value={selectedFile?.encryptedData.substring(0, 200) + "..."} InputProps={{ readOnly: true }} sx={{ mb: 2 }} />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setSelectedFile(null)}>Close</Button>
        </DialogActions>
      </Dialog>

      {/* Send File Dialog (User list) */}
      <Dialog open={openSendDialog} onClose={() => setOpenSendDialog(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Select Recipient</DialogTitle>
        <DialogContent dividers>
          {loadingUsers ? (
            <CircularProgress />
          ) : (
            <List>
              {users.map((u) => (
                <ListItem
                  button
                  key={u.email}
                  onClick={() => {
                    alert(`Send file to ${u.email} using publicKey:\n${u.publicKey}`);
                    setOpenSendDialog(false);
                  }}
                >
                  <ListItemText
                    primary={u.email}
                    secondary={u.publicKey.substring(0, 40) + "..."}
                  />
                </ListItem>
              ))}
              {users.length === 0 && <Typography>No users found</Typography>}
            </List>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenSendDialog(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
