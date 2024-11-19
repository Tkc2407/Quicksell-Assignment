# **Interactive Kanban Board Application**

This project is an **interactive Kanban board** built with **React JS**, designed to group and display tickets dynamically based on the user's preferences. It integrates with the API provided at [QuickSell API](https://api.quicksell.co/v1/internal/frontend-assignment). The application supports grouping and sorting tickets in various ways while ensuring the user's view state is preserved across page reloads.

---

## **Features**

1. **Dynamic Grouping Options**
   - **By Status**: Tickets are grouped based on their current status.
   - **By User**: Tickets are grouped by their assigned user.
   - **By Priority**: Tickets are grouped based on their priority level.

2. **Sorting Options**
   - **By Priority**: Sort tickets in descending order of priority (from Urgent to No Priority).
   - **By Title**: Sort tickets alphabetically in ascending order.

3. **State Persistence**
   - User preferences (grouping and sorting) are saved locally, ensuring the view state persists even after a page reload.

4. **Responsive Design**
   - The application is responsive and visually appealing, ensuring usability on desktops, tablets, and mobile devices.

5. **Priority Levels**
   - Tickets have the following priority levels:
     - **Urgent** (4)
     - **High** (3)
     - **Medium** (2)
     - **Low** (1)
     - **No Priority** (0)

---

## **API Integration**

The application fetches data from the following API:
https://api.quicksell.co/v1/internal/frontend-assignment

