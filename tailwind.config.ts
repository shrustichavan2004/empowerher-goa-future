import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				empowerment: {
					pink: 'hsl(var(--empowerment-pink))',
					gold: 'hsl(var(--empowerment-gold))',
					mint: 'hsl(var(--empowerment-mint))',
					lavender: 'hsl(var(--empowerment-lavender))',
					peach: 'hsl(var(--empowerment-peach))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'liquid-motion': {
					'0%, 100%': {
						borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%',
						transform: 'translate(0, 0) scale(1)'
					},
					'50%': {
						borderRadius: '30% 60% 70% 40%/50% 60% 30% 60%',
						transform: 'translate(-5%, 10%) scale(1.1)'
					}
				},
				'morph-button': {
					'0%': {
						borderRadius: '1rem'
					},
					'50%': {
						borderRadius: '2rem'
					},
					'100%': {
						borderRadius: '1rem'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0px)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					}
				},
				'flip-card': {
					'0%': {
						transform: 'rotateY(0)'
					},
					'100%': {
						transform: 'rotateY(180deg)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'liquid-motion': 'liquid-motion 8s ease-in-out infinite',
				'morph-button': 'morph-button 3s ease-in-out infinite',
				'float': 'float 3s ease-in-out infinite',
				'flip-card': 'flip-card 0.6s ease-in-out'
			},
			backgroundImage: {
				'gradient-liquid': 'var(--gradient-liquid)',
				'gradient-soft': 'var(--gradient-soft)'
			},
			boxShadow: {
				'morph': 'var(--shadow-morph)',
				'card-soft': 'var(--shadow-card)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
