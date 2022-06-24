import { render } from '@testing-library/react';
import Country from '../components/Country';

describe('Test the Country component', () => {
  it('renders the Country component correctly', () => {
    const component = render(
      <Country
        countryName="Albania"
        confirmed="277940"
        deaths="3497"
        selectedView="confirmed"
      />,
    );
    expect(component).toMatchSnapshot();
  });

  it('shows the Confirmed Cases view when the selectedView is equal to confirmed', async () => {
    const { container } = render(
      <Country
        countryName="Albania"
        confirmed="277940"
        deaths="3497"
        selectedView="confirmed"
      />,
    );
    expect(container.getElementsByClassName('confirmed')).toHaveLength(1);
    expect(container.getElementsByClassName('deaths')).toHaveLength(0);
  });

  it('shows the Deaths Cases view when the selectedView is equal to deaths', async () => {
    const { container } = render(
      <Country
        countryName="Albania"
        confirmed="277940"
        deaths="3497"
        selectedView="deaths"
      />,
    );
    expect(container.getElementsByClassName('deaths')).toHaveLength(1);
    expect(container.getElementsByClassName('confirmed')).toHaveLength(0);
  });
});
