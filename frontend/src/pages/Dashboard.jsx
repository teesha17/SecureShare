import { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Tabs,
  Tab,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";
import { Logout, Visibility, Download, Share, Shield } from "@mui/icons-material";

// Dummy data for files
const dummyFiles = [
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
];

export default function Dashboard() {
  const [files, setFiles] = useState([]);
  const [tab, setTab] = useState(0);
  const [selectedFile, setSelectedFile] = useState(null);
  const [decryptedPreview, setDecryptedPreview] = useState("");

  useEffect(() => {
    // Load files (later replace with API/localStorage)
    setFiles(dummyFiles);
  }, []);

  const formatSize = (bytes) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
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
            onClick={() => alert("Logged out")}
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
                        onClick={() => alert("Share file")}
                      >
                        Share
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
            {files.length === 0 && (
              <Typography textAlign="center" sx={{ mt: 4, width: "100%" }}>
                No files yet. Upload your first file!
              </Typography>
            )}
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
      </Container>

      {/* File Preview Dialog */}
      <Dialog
        open={!!selectedFile}
        onClose={() => setSelectedFile(null)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>File Preview: {selectedFile?.name}</DialogTitle>
        <DialogContent dividers>
          <Typography variant="body2" gutterBottom>
            Encrypted AES Key:
          </Typography>
          <TextField
            fullWidth
            multiline
            value={selectedFile?.encryptedAESKey || ""}
            InputProps={{ readOnly: true }}
            sx={{ mb: 2 }}
          />
          <Typography variant="body2" gutterBottom>
            Initialization Vector (IV):
          </Typography>
          <TextField
            fullWidth
            multiline
            value={selectedFile?.iv || ""}
            InputProps={{ readOnly: true }}
            sx={{ mb: 2 }}
          />
          <Typography variant="body2" gutterBottom>
            Encrypted File Data:
          </Typography>
          <TextField
            fullWidth
            multiline
            value={selectedFile?.encryptedData.substring(0, 200) + "..."}
            InputProps={{ readOnly: true }}
            sx={{ mb: 2 }}
          />

          <Button
            variant="contained"
            onClick={() => setDecryptedPreview("This is a preview of decrypted text...")}
          >
            Decrypt & Preview
          </Button>

          {decryptedPreview && (
            <Box mt={3} p={2} bgcolor="grey.100" borderRadius={2}>
              <Typography variant="subtitle2" color="success.main">
                Decrypted Preview:
              </Typography>
              <Typography fontFamily="monospace">{decryptedPreview}</Typography>
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setSelectedFile(null)}>Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
