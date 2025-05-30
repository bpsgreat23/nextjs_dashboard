import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export async function GET(request: Request) {
	const data = await sql`
    SELECT invoices.amount, customers.name
    FROM invoices
    JOIN customers ON invoices.customer_id = customers.id
    WHERE invoices.amount = 666;
  `;

	return data;
}

// export default listInvoices;

  // try {
  // 	return Response.json(await listInvoices());
  // } catch (error) {
  // 	return Response.json({ error }, { status: 500 });
  // }

