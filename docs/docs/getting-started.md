# Getting Started

### Quick Installation

Biograph is easy to set up on any Linux server. Here's how:

```bash
# Install Frappe Bench
pip install frappe-bench

# Initialize a new bench
bench init frappe-bench
cd frappe-bench

# Get ERPNext (required for full functionality)
bench get-app erpnext

# Get Biograph
bench get-app https://github.com/Tacten/biograph

# Create a new site
bench new-site yourhospital.com

# Install the apps
bench --site yourhospital.com install-app erpnext
bench --site yourhospital.com install-app healthcare

# Start the server
bench start
```

### Production Deployment

```bash
# Enable production mode
sudo bench setup production [your-user]

# Enable HTTPS
sudo bench setup lets-encrypt yourhospital.com

# Done! Your production server is ready
```

### Docker Deployment

```bash
# Use official Docker images
docker pull frappe/erpnext:latest

# Or use Docker Compose
git clone https://github.com/frappe/frappe_docker
cd frappe_docker
docker-compose up -d
```

### Try the Demo

Don't want to install yet? Try our hosted demo:

**🔗 [https://marley.frappe.cloud](https://marley.frappe.cloud)**

- No installation required
- Pre-loaded sample data
- Explore all features
- Test workflows
- Try customizations
