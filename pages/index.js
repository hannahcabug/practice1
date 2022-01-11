import StyledButton from '../comps/StyledButton';
import { useTheme } from '../utils/provider';

export default function Home() {
  const {setTheme} = useTheme();
  return (
    <div>
      <StyledButton></StyledButton>
      <button onClick={()=>setTheme('light')}>LIGHT MODE</button>
      <button onClick={()=>setTheme('dark')}>DARK MODE</button>
    </div>
  )
}
