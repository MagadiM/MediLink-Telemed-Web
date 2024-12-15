document.getElementById('loginForm').addEventListener('submit', async (event) => {
    event.preventDefault();
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    try {
      const response = await fetch('/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
  
      const data = await response.json();
  
      if (response.ok) {
        // Successful login, redirect to dashboard
        window.location.href = data.dashboardUrl;
      } else {
        // Show error message
        document.getElementById('errorMessage').textContent = data.error;
      }
    } catch (error) {
      console.error('Error:', error);
      document.getElementById('errorMessage').textContent = 'An error occurred. Please try again.';
    }
  });
  