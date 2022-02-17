<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
  <xsl:strip-space elements="*" />

  <xsl:template match="ies">
    <html>
      <h1><xsl:value-of select="@name" /></h1>
      <p>Web page: <a >
        <xsl:attribute name="href">
          <xsl:value-of select="@web" />
        </xsl:attribute>
        <xsl:value-of select="@web" /></a></p>
      <table border="1">
        <tr>
          <th>Cycle name</th>
          <th>Grade</th>
          <th>Year of title</th>
        </tr>
        <xsl:apply-templates />
      </table>
    </html>
  </xsl:template>

  <xsl:template match="cycle">
    <tr>
      <td><xsl:value-of select="name"/></td>
      <td><xsl:value-of select="grade"/></td>
      <td><xsl:value-of select="decreeTitle/@year"/></td>
    </tr>
  </xsl:template>

</xsl:stylesheet>