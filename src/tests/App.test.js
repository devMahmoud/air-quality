import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import testStore from './TestStore';
import App from '../App';

const store = testStore();

describe('Test the App components', () => {
  it('renders the App correctly', () => {
    const app = render(
      <Provider store={store}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Provider>,
    );
    expect(app).toMatchSnapshot();
  });

  it('shows the CountryDetails page for specific element when clicking the element link', async () => {
    const { container } = render(
      <Provider store={store}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Provider>,
    );
    fireEvent.click(screen.getByText('Albania'));
    expect(container.getElementsByClassName('details-wrapper')).toBeTruthy();
  });
});
