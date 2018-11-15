<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0"
            xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
   <xsl:output method="xml" omit-xml-declaration="yes" indent="yes"/>
   <xsl:template match="/">
        <html>
            <head>
                <style>
                    table {
                        border-collapse: collapse;
                        color: black;
                        text-align: left;
                    }

                    table th {
                        color: rgb(230, 230, 230);
                        background-color: rgb(0, 124, 186);
                        border-top: 2px solid rgb(0, 0, 0);
                        border-bottom: 2px solid rgb(0, 0, 0);
                        text-align: left;
                        vertical-align: middle;
                        padding: 4px;
                        font-size: 14px;
                        font-weight: 400;
                    }
                    table tr:first-child th {
                        color: white;
                        font-size: 14px;
                        border-bottom: 2px solid rgb(0, 0, 0);
                        padding: 4px;
                    }

                    table tr:nth-child(2n) td {
                        background-color: rgb(245, 245, 245);
                        font-size: 11px;
                        vertical-align: top;
                        padding: 4px;
                        font-family: 'Verdana', 'Arial', 'Times New Roman';
                    }
                </style>
            </head>
            <body>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Size</th>
                        <th>Type</th>
                    </tr>
                    <xsl:for-each select="directory/file">
                    <tr>
                        <td><xsl:value-of select="@name"/></td>
                        <td><xsl:value-of select="@size"/></td>
                        <td><xsl:value-of select="@type"/></td>
                    </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet> 