export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  category: string;
  image: string;
  title: string;
}

export const SERVICES: Service[] = [
  {
    id: 'wedding',
    title: 'Wedding Coverage',
    description: 'Complete cinematic coverage of your special day.',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'pre-wedding',
    title: 'Pre Wedding Shoots',
    description: 'Romantic storytelling before the big day.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'post-wedding',
    title: 'Post Wedding Photography',
    description: 'Beautiful portraits after the celebrations.',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'engagement',
    title: 'Engagement Ceremony',
    description: 'Capturing the first step of your journey together.',
    image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'reception',
    title: 'Reception Events',
    description: 'The joy and grandeur of your grand celebration.',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'rice-feeding',
    title: 'Weaning Ceremony',
    description: 'Traditional rice feeding ceremony (Pasni) coverage.',
    image: 'https://images.unsplash.com/photo-1505932794465-147d1f1b2c97?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'birthday',
    title: 'Birthday Shoots',
    description: 'Making every year memorable with creative shots.',
    image: 'https://images.unsplash.com/photo-1530103043960-ef38714abb15?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'baby',
    title: 'Baby Shoots',
    description: 'Adorable moments of your little ones.',
    image: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'maternity',
    title: 'Maternity Shoots',
    description: 'Celebrating the beautiful journey of motherhood.',
    image: 'https://images.unsplash.com/photo-1551446591-142875a901a1?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'corporate',
    title: 'Corporate Events',
    description: 'Professional coverage for your business milestones.',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800',
  },
];

export const GALLERY: GalleryItem[] = [
  { id: 'df-1', category: 'Wedding', title: 'Sacred Union', image: 'https://ais-dev-4lgt4ctdxqoitvr7nup4eq-420153344696.asia-southeast1.run.app/api/attachments/97960333-6623-4e80-8772-230b0507207a' },
  { id: 'df-2', category: 'Wedding', title: 'Henna Art', image: 'https://ais-dev-4lgt4ctdxqoitvr7nup4eq-420153344696.asia-southeast1.run.app/api/attachments/5f24f575-470a-4416-8c46-88092289650b' },
  { id: 'df-3', category: 'Wedding', title: 'Traditional Grace', image: 'https://ais-dev-4lgt4ctdxqoitvr7nup4eq-420153344696.asia-southeast1.run.app/api/attachments/c0901e1a-1d7c-4034-8025-635b756191c0' },
  { id: 'df-4', category: 'Wedding', title: 'Celebration Collage', image: 'https://ais-dev-4lgt4ctdxqoitvr7nup4eq-420153344696.asia-southeast1.run.app/api/attachments/5551341c-3220-4318-8686-3023812739f4' },
  { id: 'df-5', category: 'Wedding', title: 'Radiant Smile', image: 'https://ais-dev-4lgt4ctdxqoitvr7nup4eq-420153344696.asia-southeast1.run.app/api/attachments/3a38e88e-670d-4584-b026-6f455e9664e4' },
  { id: 'nep-1', category: 'Wedding', title: 'Sindoor Ceremony', image: 'https://images.unsplash.com/photo-1604017011826-d3b4c23f8914?auto=format&fit=crop&q=80&w=800' },
  { id: 'nep-2', category: 'Wedding', title: 'Traditional Attire', image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=800' },
  { id: 'nep-3', category: 'Wedding', title: 'Cultural Rituals', image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=800' },
  { id: 'nep-4', category: 'Wedding', title: 'The Janti Procession', image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800' },
  { id: 'nep-5', category: 'Wedding', title: 'Bridal Elegance', image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800' },
  { id: 'nep-6', category: 'Wedding', title: 'Sacred Fire', image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=800' },
  { id: '1', category: 'Wedding', title: 'Eternal Love', image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800' },
  { id: '2', category: 'Baby', title: 'Little Wonder', image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800' },
  { id: '3', category: 'Maternity', title: 'New Life', image: 'https://images.unsplash.com/photo-1551446591-142875a901a1?auto=format&fit=crop&q=80&w=800' },
];
