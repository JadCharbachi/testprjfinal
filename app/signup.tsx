import React, { useReducer } from 'react';

interface State {
  name: string;
  email: string;
  password: string;
  errors: {
    name?: string;
    email?: string;
    password?: string;
  };
  isSubmitted: boolean;
}

interface Action {
  type: string;
  field?: string;
  value?: string;
  errors?: Partial<State['errors']>;
}

const initialState: State = {
  name: '',
  email: '',
  password: '',
  errors: {},
  isSubmitted: false
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'SET_FIELD':
      return { ...state, [action.field!]: action.value }; // Non-null assertion as field will always be provided for this action type
    case 'SET_ERRORS':
      return { ...state, errors: action.errors || {} };
    case 'SUBMIT_FORM':
      return { ...state, isSubmitted: true };
    default:
      return state;
  }
}

function validateForm(fields: State): State['errors'] {
  const errors: State['errors'] = {};
  if (!fields.name) errors.name = 'Name is required.';
  if (!fields.email) {
    errors.email = 'Email is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    errors.email = 'Email is invalid.';
  }
  if (!fields.password) {
    errors.password = 'Password is required.';
  } else if (fields.password.length < 8) {
    errors.password = 'Password must be at least 8 characters long.';
  }
  return errors;
}

function SignUpPage() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: 'SET_FIELD',
      field: e.target.name,
      value: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = validateForm(state);
    if (Object.keys(errors).length === 0) {
      console.log('Form is valid. Submitting...');
      dispatch({ type: 'SUBMIT_FORM' });
    } else {
      dispatch({ type: 'SET_ERRORS', errors });
    }
  };

  return (
    <div className="signup-form">
      <h1>Register</h1>
      <form onSubmit={handleSubmit} noValidate>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={state.name}
            onChange={handleChange}
          />
          {state.errors.name && <p className="error">{state.errors.name}</p>}
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={state.email}
            onChange={handleChange}
          />
          {state.errors.email && <p className="error">{state.errors.email}</p>}
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={state.password}
            onChange={handleChange}
          />
          {state.errors.password && <p className="error">{state.errors.password}</p>}
        </div>
        <button type="submit">Sign Up</button>
        {state.isSubmitted && Object.keys(state.errors).length === 0 && (
          <p className="success">Registration successful!</p>
        )}
      </form>
    </div>
  );
}

export default SignUpPage;
