import { fireEvent, screen } from '@testing-library/react';
import { RenderComponents } from 'shared/lib/test/RenderComponent/RenderComponent';
import { Sidebar } from './Sidebar';

describe('Siderbar', () => {
  test('SideBar test render', () => {
    RenderComponents(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('SideBar toggle on', () => {
    RenderComponents(<Sidebar />);
    const toggleBtn = screen.getByTestId('sidebar-toggle');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });

  test('SideBar toggle off', () => {
    RenderComponents(<Sidebar />);
    const toggleBtn = screen.getByTestId('sidebar-toggle');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed');
  });
});
