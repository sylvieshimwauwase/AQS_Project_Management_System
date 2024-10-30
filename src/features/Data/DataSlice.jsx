import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  employeeService,
  teamService,
  projectService,
  reportService,
  taskService,
  commentService,
} from "../../Service/DataServices";

// --- Employee Slice CRUD Operations ---
export const fetchEmployees = createAsyncThunk(
  "employees/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await employeeService.fetchAll();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const createEmployee = createAsyncThunk(
  "employees/create",
  async (employeeData, { rejectWithValue }) => {
    try {
      const response = await employeeService.register(employeeData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// export const updateEmployee = createAsyncThunk(
//   "employees/update",
//   async ({ employeeId, data }, { rejectWithValue }) => {
//     try {
//       const response = await employeeService.updateEmployee(employeeId, data);
//       return { employeeId, data: response.data };
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// export const deleteEmployee = createAsyncThunk(
//   "employees/delete",
//   async (employeeId, { rejectWithValue }) => {
//     try {
//       await employeeService.deleteEmployee(employeeId);
//       return employeeId;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

const employeeSlice = createSlice({
  name: "employees",
  initialState: { list: [], status: null, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmployees.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchEmployees.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload;
      })
      .addCase(fetchEmployees.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(createEmployee.fulfilled, (state, action) => {
        state.list.push(action.payload); // Add new employee to the list
      })
      // .addCase(updateEmployee.fulfilled, (state, action) => {
      //   const { employeeId, data } = action.payload;
      //   const existingEmployee = state.list.find(
      //     (employee) => employee.id === employeeId
      //   );
      //   if (existingEmployee) {
      //     Object.assign(existingEmployee, data); // Update employee data in the list
      //   }
      // })
      // .addCase(deleteEmployee.fulfilled, (state, action) => {
      //   state.list = state.list.filter(
      //     (employee) => employee.id !== action.payload
      //   );
      // });
  },
});

// // --- Team Slice CRUD Operations ---
// export const fetchTeams = createAsyncThunk(
//   "teams/fetchAll",
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await teamService.fetchAllTeams();
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// export const createTeam = createAsyncThunk(
//   "teams/create",
//   async (teamData, { rejectWithValue }) => {
//     try {
//       const response = await teamService.registerTeam(teamData);
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// export const updateTeam = createAsyncThunk(
//   "teams/update",
//   async ({ teamId, data }, { rejectWithValue }) => {
//     try {
//       const response = await teamService.updateTeam(teamId, data);
//       return { teamId, data: response.data };
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// export const deleteTeam = createAsyncThunk(
//   "teams/delete",
//   async (teamId, { rejectWithValue }) => {
//     try {
//       await teamService.deleteTeam(teamId);
//       return teamId;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// const teamSlice = createSlice({
//   name: "teams",
//   initialState: { list: [], status: null, error: null },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchTeams.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(fetchTeams.fulfilled, (state, action) => {
//         state.status = "succeeded";
//         state.list = action.payload;
//       })
//       .addCase(fetchTeams.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.payload;
//       })
//       .addCase(createTeam.fulfilled, (state, action) => {
//         state.list.push(action.payload);
//       })
//       .addCase(updateTeam.fulfilled, (state, action) => {
//         const { teamId, data } = action.payload;
//         const existingTeam = state.list.find((team) => team.id === teamId);
//         if (existingTeam) {
//           Object.assign(existingTeam, data); // Update team data in the list
//         }
//       })
//       .addCase(deleteTeam.fulfilled, (state, action) => {
//         state.list = state.list.filter((team) => team.id !== action.payload);
//       });
//   },
// });

// --- Project Slice CRUD Operations ---
export const fetchProjects = createAsyncThunk(
  "projects/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await projectService.fetchAll();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const createProject = createAsyncThunk(
  "projects/create",
  async (projectData, { rejectWithValue }) => {
    try {
      const response = await projectService.register(projectData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// export const updateProject = createAsyncThunk(
//   "projects/update",
//   async ({ projectId, data }, { rejectWithValue }) => {
//     try {
//       const response = await projectService.updateProject(projectId, data);
//       return { projectId, data: response.data };
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

export const deleteProject = createAsyncThunk(
  "projects/delete",
  async (projectId, { rejectWithValue }) => {
    try {
      await projectService.delete(projectId);
      return projectId;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const projectSlice = createSlice({
  name: "projects",
  initialState: { list: [], status: null, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjects.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload;
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(createProject.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })
      // .addCase(updateProject.fulfilled, (state, action) => {
      //   const { projectId, data } = action.payload;
      //   const existingProject = state.list.find(
      //     (project) => project.id === projectId
      //   );
      //   if (existingProject) {
      //     Object.assign(existingProject, data); // Update project data in the list
      //   }
      // })
      .addCase(deleteProject.fulfilled, (state, action) => {
        state.list = state.list.filter(
          (project) => project.id !== action.payload
        );
      });
  },
});

// --- Report Slice CRUD Operations ---
export const fetchReports = createAsyncThunk(
  "reports/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await reportService.fetchAll();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const createReport = createAsyncThunk(
  "reports/create",
  async (reportData, { rejectWithValue }) => {
    try {
      const response = await reportService.register(reportData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateReport = createAsyncThunk(
  "reports/update",
  async ({ reportId, data }, { rejectWithValue }) => {
    try {
      const response = await reportService.update(reportId, data);
      return { reportId, data: response.data };
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteReport = createAsyncThunk(
  "reports/delete",
  async (reportId, { rejectWithValue }) => {
    try {
      await reportService.delete(reportId);
      return reportId;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const reportSlice = createSlice({
  name: "reports",
  initialState: { list: [], status: null, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReports.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchReports.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload;
      })
      .addCase(fetchReports.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(createReport.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })
      .addCase(updateReport.fulfilled, (state, action) => {
        const { reportId, data } = action.payload;
        const existingReport = state.list.find(
          (report) => report.id === reportId
        );
        if (existingReport) {
          Object.assign(existingReport, data); // Update report data in the list
        }
      })
      .addCase(deleteReport.fulfilled, (state, action) => {
        state.list = state.list.filter(
          (report) => report.id !== action.payload
        );
      });
  },
});

// --- Task Slice CRUD Operations ---
export const fetchTasks = createAsyncThunk(
  "tasks/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await taskService.fetchAll();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const createTask = createAsyncThunk(
  "tasks/create",
  async (taskData, { rejectWithValue }) => {
    try {
      const response = await taskService.register(taskData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateTask = createAsyncThunk(
  "tasks/update",
  async ({ taskId, data }, { rejectWithValue }) => {
    try {
      const response = await taskService.update(taskId, data);
      return { taskId, data: response.data };
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteTask = createAsyncThunk(
  "tasks/delete",
  async (taskId, { rejectWithValue }) => {
    try {
      await taskService.delete(taskId);
      return taskId;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const taskSlice = createSlice({
  name: "tasks",
  initialState: { list: [], status: null, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(createTask.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        const { taskId, data } = action.payload;
        const existingTask = state.list.find((task) => task.id === taskId);
        if (existingTask) {
          Object.assign(existingTask, data); 
        }
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.list = state.list.filter((task) => task.id !== action.payload);
      });
  },
});

// --- Comment Slice CRUD Operations ---
export const fetchComments = createAsyncThunk(
  "comments/fetchAll",
  async (taskId, { rejectWithValue }) => {
    try {
      const response = await commentService.fetchAll(taskId);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const createComment = createAsyncThunk(
  "comments/create",
  async ({ taskId, commentData }, { rejectWithValue }) => {
    try {
      const response = await commentService.register(taskId, commentData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateComment = createAsyncThunk(
  "comments/update",
  async ({ commentId, data }, { rejectWithValue }) => {
    try {
      const response = await commentService.update(commentId, data);
      return { commentId, data: response.data };
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteComment = createAsyncThunk(
  "comments/delete",
  async (commentId, { rejectWithValue }) => {
    try {
      await commentService.delete(commentId);
      return commentId;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const commentSlice = createSlice({
  name: "comments",
  initialState: { list: [], status: null, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchComments.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload;
      })
      .addCase(fetchComments.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(createComment.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })
      .addCase(updateComment.fulfilled, (state, action) => {
        const { commentId, data } = action.payload;
        const existingComment = state.list.find(
          (comment) => comment.id === commentId
        );
        if (existingComment) {
          Object.assign(existingComment, data); 
        }
      })
      .addCase(deleteComment.fulfilled, (state, action) => {
        state.list = state.list.filter(
          (comment) => comment.id !== action.payload
        );
      });
  },
});



// Export all slices
export const employeeReducer = employeeSlice.reducer;
export const projectReducer = projectSlice.reducer;
export const reportReducer = reportSlice.reducer;
export const taskReducer = taskSlice.reducer;
export const commentReducer = commentSlice.reducer;
