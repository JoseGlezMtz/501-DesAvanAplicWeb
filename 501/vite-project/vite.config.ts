import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true
  },
  build: {
    rollupOptions: {
      input: {
        main: '/index.html',
        // Add entries for your milestone pages
        rbac: '/public/A01028517/Milestone2/A01028517/RBAC.html',
        travelForm: '/public/A01028517/Milestone2/A01784399/TravelRequestForm.html',
        expenseForm: '/public/A01028517/Milestone2/A01028418/ExpenseForm.html',
        formikYup: '/public/A01028517/Milestone2/A01784217/formik_yup.html',
      }
    }
  }
})
