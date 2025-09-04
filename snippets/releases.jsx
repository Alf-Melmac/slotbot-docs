export const Releases = ({server, serverNew, frontend, frontendNew}) => {
	const New = () => {
		return (
			<div style={{
				fontSize: '0.6875rem',
				borderRadius: '2rem',
				height: '1.25rem',
				lineHeight: '1.125rem',
				padding: '0 0.625rem',
				display: 'inline-grid',
				alignItems: 'center',
				width: 'fit-content',
				fontWeight: 700,
				color: '#00724d',
				background: '#e6fff3',

				overflow: 'hidden',
				textOverflow: 'ellipsis',
				textAlign: 'center',
				cursor: 'default'
			}}
			>
				NEU
			</div>
		)
	}

	return (
		<Columns cols="2">
			<Card title={"Slotbot-Server"} href={`https://github.com/Alf-Melmac/slotbotServer/releases/tag/v${server}`}>
				{server} {serverNew && <New/>}
			</Card>
			<Card title={"Slotbot-Frontend"} href={`https://github.com/Alf-Melmac/slotbot-frontend/releases/tag/v${frontend}`}>
				{frontend} {frontendNew && <New/>}
			</Card>
		</Columns>
	)
};
