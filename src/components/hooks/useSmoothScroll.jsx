import { useRouter } from 'next/router';

export function useSmoothScroll() {
  const router = useRouter();

  const smoothScroll = (mainPage, scrollSpot) => {
    if (router.pathname === mainPage) {
      const el = document.getElementById(scrollSpot);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      router.push(`${mainPage}#${scrollSpot}`);
    }
  };

  return { smoothScroll };
}
